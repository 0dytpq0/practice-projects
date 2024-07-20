import { useMutation, useQueryClient } from '@tanstack/react-query';
import MeetingAPI from '@/api/meeting.api';
import { useQuery } from '@tanstack/react-query';
import { Tables } from '@/types/supabase';

type MeetingType = Tables<'meeting'>;

export type UpdateMeetingType = {
  title: string;
  date: string;
  password: string;
};

const meetingApi = new MeetingAPI();

// Meeting 여러개 불러오기
export const useMeetings = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['meetings'],
    queryFn: () => meetingApi.selectMeetings()
  });
  return { data, isLoading };
};

// Meeting 한개 불러오기
export const useMeeting = (id: number) => {
  const { data, error, isLoading } = useQuery<MeetingType | null>({
    queryKey: ['meeting', id],
    queryFn: () => meetingApi.selectMeeting(id)
  });
  return { data, error, isLoading };
};

// Meeting 생성하기
export const useCreateMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newMeeting: UpdateMeetingType) => await meetingApi.insertMeeting(newMeeting),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['meetings']
      });
    }
  });
};

// Meeting 삭제하기
export const useDeleteMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => meetingApi.deleteMeeting(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['meetings']
      });
    }
  });
};

// Meeting 수정하기
export const useUpdateMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updateData }: { id: number; updateData: UpdateMeetingType }) =>
      meetingApi.updateMeeting(id, updateData),
    onSuccess: (data, variables) => {
      // 'variables'를 통해 mutationFn에 전달된 'id'에 접근
      queryClient.invalidateQueries({
        queryKey: ['meetings']
      });
      queryClient.invalidateQueries({
        queryKey: ['meeting', variables.id]
      });
    }
  });
};
