import ButtonTest from './pages/ButtonTest'
import InputTest from './pages/InputTest'
import ModalTest from './pages/ModalTest'

// 색상 테마
// 가장 많이 사용되는 색상을 주 색상(primary color), 두 번째는 보조색상(secondary color)
// 주 색상은 P 보조는 S로 통한다.
// 주 색상과 보조 색상만으로 구분하지 않고 필요에 따라 좀 더 다양한 색상을 사용할 수 있다.
// daisyui플러그인의 색상 테마로 강조, 정보, 경고, 오류 색상 등을 제공하고 이런 색상들을 한꺼번에 부를 때 '색상 테마'라고 한다.

// src에 서브 디렉터리를 만들고 다양한 테마 컴포넌트들을 구현하겠다.

export default function App() {
  return (
    <main>
      <ButtonTest />
      <InputTest />
      <ModalTest />
    </main>
  )
}
