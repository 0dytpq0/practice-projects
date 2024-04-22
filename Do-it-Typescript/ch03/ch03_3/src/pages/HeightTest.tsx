import { Title, Div } from '../components'

// 테일윈드CSS는 w-full, h-full도 제공하는데 %임 부모요소를 기준으로 설정된다.
// w-4 = 1rem w-4는 문자'M'의 길이, h-4는 높이이고 증가는 1당 0.25rem이다. w-1/2 = 부모요소의 50%(분모는 2~6, 분자는 1~분모-1까지)

export default function HeightTest() {
  return (
    <section className="mt-4">
      <Title>HeightTest</Title>
      <Div className="h-40 text-center bg-blue-500 mt-4">
        <Div className="bg-blue-500 h-1/2">
          <p className="text-center text-red-50">h-1/2</p>
        </Div>
        <Div className="bg-red-500 h-1/2">
          <p className="text-center text-red-50">h-1/2</p>
        </Div>
      </Div>
    </section>
  )
}
