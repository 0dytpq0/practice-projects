import { Title, Subtitle } from '../components'
import * as D from '../data'

// 테일윈드 display 속성
// hidden | block | inline-block | inline | flex

// inline-block은 width,height 스타일 적용 후 자식 요소가 수평 배치 inline = width,height style 속성 적용x이므로 글자 폭만큼만 바탕색보임
// block은 자식요소가 수직으로 배치(block 특성) width,height 스타일 적용

export default function DisplayTest() {
  const inlineChildren = D.range(1, 5 + 1).map(number => (
    <div key={number} className="inline w-8 h-8 m-4 text-center text-gray-700 bg-sky-300">
      {number}
    </div>
  ))
  const blockChildren = D.range(1, 5 + 1).map(number => (
    <div key={number} className="block w-8 h-8 m-4 text-center text-gray-700 bg-sky-300">
      {number}
    </div>
  ))
  const inlineBlockChildren = D.range(1, 5 + 1).map(number => (
    <div
      key={number}
      className="inline-block w-8 h-8 m-4 text-center text-gray-700 bg-sky-300">
      {number}
    </div>
  ))
  return (
    <section className="mt-4">
      <Title>DisplayTest</Title>
      <div>
        <Subtitle>display: inline</Subtitle>
        {inlineChildren}
      </div>
      <div>
        <Subtitle>display: block</Subtitle>
        {blockChildren}
      </div>
      <div>
        <Subtitle>display: inline-block</Subtitle>
        {inlineBlockChildren}
      </div>
    </section>
  )
}
