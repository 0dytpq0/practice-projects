import { Title } from '../components'
import * as D from '../data'

// <img>는 HTML요소 중 유일하게 width와 height 속성이 있다. 이 속성은 이미지를 가로,세로 화면 비율에 맞춰 화면에 표시한다.
// width,height값을 각각 400px로 설정했으나 이미지가 로딩되기 전엔 400px로 보이지만 실제 이미지가 로딩되면 줄어드는 현상을 볼 수 있다.
// 이는 이미지가 왜곡되어 보이지 않도록 웹 브라우저가 화면 비율을 고려해 height값을 계산했기 때문이다.
// <img>의 이런 특성은 이미지를 특정 높이로 고정하기 어렵게 하므로 디자이너들은 대부분 CSS의 background-image 스타일 속성을 선호한다.
// CSS의 background-image 속성은 url을 매개변수로 사용하는 형태인데, 이는 이미지 URL 부분을 타입스크립트 코드에서 결정하려고 할 때 조금 번거롭다.
// 앞서 구현한 Div 컴포넌트에 src 속성을 추가하여 좀 더 쉽게 사용할 수 있게 만들겠다.

const src = D.randomImage(3000, 1600)
export default function ImageTest() {
  return (
    <section className="mt-4">
      <Title>ImageTest</Title>
      <img src={src} className="bg-gray-300" width="400" height="400" />
    </section>
  )
}
