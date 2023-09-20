import Tailwindcss from './pages/Tailwindcss'
import Color from './pages/Color'
import TextsTest from './pages/TextsTest'

// 테일윈드 사용 - npm i -D postcss autoprefixer tailwindcss
// autoprefixer는 -ms 나 -webkit같은 밴더 접두사 문제를 해결해줌, postcss의 플러그인 형태로 동작하므로 같이 설치해줘야댐.
// PostCss와 테일윈드 CSS가 동작하려면 각각의 구성 파일이 있어야한다.
// postCSs가 테일윈드css를 플러그인으로 동작시키려면 postcss.config.jsㅍ일에 테일윈드 css를 등록해야 한다.
// 그리고 테일윈드css는 postcss와는 별도로 자신만의 구성 파일이 있어야 한다.
// 위의 두 구성파일을 쉽게 생성할 수 있도록 다음 명령이 제공된다. = npx tailwindcss init -p
// 테일윈드CSS는 CSS 프레임워크를 쉽게 개발할 수 있게 해주는 저수준 프레임워크이다. -> 부트스트랩처럼 다양한 테일윈드 CSS 컴포넌트가 있으며
// 이 중 무료로 제공하는 컴포넌트가 가장 많은 daisyui플러그인을 다운. == npm i -D daisyui
// 테일윈드CSS는 기본 제공 기능 외에도 다양한 새 기능을 추가할 수 있게하는 플러그인 시스템도 제공한다.
// 그리고 테일윈드CSS의 플러그인 이름에 @tailwindcss/라는 접두사가 붙은 패키지는 테일윈드CSS 제작사가 직접 만들어 제공하는 것.
// 여러 줄의 텍스트를 지정한 줄 수로 잘라서 표시해주는 @tailwindcss/line-clamp 플러그인 다운 = npm i -D @tailwindcss/line-clamp

export default function App() {
  return (
    <div>
      <TextsTest />
      <Color />
      <Tailwindcss />
    </div>
  )
}
