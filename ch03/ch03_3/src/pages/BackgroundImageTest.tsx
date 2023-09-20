import { Title, Div, Subtitle } from '../components'
import * as D from '../data'
// background-size 스타일 속성
// 앞 실행 결과에서 백그라운드 이미지는 전체 크기가 아니라 일부분만 보인 것이다.
// 전체 이미지를 볼 수 있게 위의 속성을 제공하며, 테일윈드에선 bg-auto, bg-cover, bg-contain을 제공한다.
// 하지만 이미지의 크기가 화면과 다르면 반복해서 나타나기에 일부만 보이더라고 이미지가 훼손되지 않게 하고자 보통은 bg-cover로 설정한다.
const src = D.randomImage(1200, 400)
export default function BackgroundImageTest() {
  return (
    <section className="mt-4">
      <Title>BackgroundImageTest</Title>
      <Div className="mt-4 bg-gray-300 h-80" src={src}>
        <Subtitle className="text-gray-500">Some Text here</Subtitle>
      </Div>
    </section>
  )
}
