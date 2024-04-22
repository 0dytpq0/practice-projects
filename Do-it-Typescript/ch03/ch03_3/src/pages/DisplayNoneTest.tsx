import { Title } from '../components'

// 어떤 HTML 요소를 나타내지 않게 해야 할때 CSS의 visibility 스타일 속성 이용
// 테일윈드에선 visible이나 invisible 두 값 가운데 하나 설정 가능. display : none(hidden)은 아예 사라짐(크기 반영x) visibility: hidden은 화면에 보이진 않아도 요소의 크기는 적용o

export default function DisplayNoneTest() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p className="visible">visibility : visible text</p>
        <p className="invisible">visibility : hidden text</p>
        <p className="hidden">display: none text</p>
      </div>
    </section>
  )
}
