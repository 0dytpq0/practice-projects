import { Title, Subtitle, Div, Icon } from '../components'
// height = "6rem"을 주면 96px 안주면 73.876px이 되는데 이는 <div>가 콘텐츠를 정확하게 감싸는 높이로 계산된 값이고,
// 이처럼 CSS에서는 높이를 명시적으로 설정하지 않고 브라우저가 계산하도록 구현하는 것이 바람직하다.

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      <Div className="text-center text-blue-100 bg-blue-600" height="6rem">
        <Icon name="home" className="text-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  )
}
