'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Map, CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import useGeoLocation from '@/lib/hooks/useGeolocation';
import { IMGURLS } from '@/constants/images.constant';
import MarkerWithOrder from '../atoms/MarkerWithOrder';
import { useSchedulesToMeetingId } from '@/lib/hooks/useScheduleAPI';
import ButtonsOnMap from '../molecules/ButtonsOnMap';

const KAKAO_SDK_URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services,clusterer&autoload=false`;
const KakaoMap = () => {
  const { id } = useParams<{ id: string }>();
  const meetingId = parseInt(id, 10);
  const myLocation = useGeoLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [markerPositions, setMarkerPositions] = useState<{ lat: number; lng: number; title: string; order: number }[]>(
    []
  );
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number } | null>(null);
  const { data: scheduleData, error } = useSchedulesToMeetingId(meetingId);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = KAKAO_SDK_URL;
    script.onload = () => {
      kakao.maps.load(() => {
        setIsLoaded(true);
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && myLocation && !mapCenter) {
      setMapCenter({ lat: myLocation.latitude, lng: myLocation.longitude });
    }
  }, [isLoaded, myLocation, mapCenter]);

  useEffect(() => {
    if (!scheduleData || scheduleData.length === 0) {
      return;
    }
    const geocoder = new kakao.maps.services.Geocoder();
    const promises = scheduleData.map((scheduleItem, index) => {
      return new Promise<{ lat: number; lng: number; title: string; order: number }>((resolve, reject) => {
        geocoder.addressSearch(scheduleItem.address!, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = {
              lat: parseFloat(result[0].y),
              lng: parseFloat(result[0].x),
              title: scheduleItem.place,
              order: index + 1
            };
            resolve(coords);
          } else {
            reject(status);
          }
        });
      });
    });

    Promise.all(promises)
      .then((results) => {
        setMarkerPositions(results);
        if (results.length === 1) {
          const singleResult = results[0];
          setMapCenter({ lat: singleResult.lat, lng: singleResult.lng });
        } else if (results.length > 1) {
          const avgLat = results.reduce((acc, pos) => acc + pos.lat, 0) / results.length;
          const avgLng = results.reduce((acc, pos) => acc + pos.lng, 0) / results.length;
          setMapCenter({ lat: avgLat, lng: avgLng });
        }
      })
      .catch((error) => {
        console.error('Geocoder failed due to:', error);
      });
  }, [isLoaded, scheduleData]);

  return (
    <section className="h-lvh mr-1 relative">
      {isLoaded && (
        <Map center={mapCenter || { lat: 37.5665, lng: 126.978 }} style={{ width: '800px', height: '100%' }} level={5}>
          {markerPositions.map((position, index) => (
            <CustomOverlayMap key={`${position.title}-${index}`} position={{ lat: position.lat, lng: position.lng }}>
              <MarkerWithOrder order={position.order} />
            </CustomOverlayMap>
          ))}
          {myLocation && (
            <MapMarker
              position={{ lat: myLocation.latitude, lng: myLocation.longitude }}
              image={{ src: IMGURLS.myLocationIconImgUrl, size: { width: 70, height: 70 } }}
              title="현재 위치"
            />
          )}
        </Map>
      )}
      <ButtonsOnMap />
    </section>
  );
};

export default KakaoMap;
