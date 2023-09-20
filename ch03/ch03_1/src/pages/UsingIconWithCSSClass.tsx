import { Icon } from '../components'

// 이 코드가 동작하려면 Icon 컴포넌트에 className 속성을 추가해 줘야 합니다.
// 리액트 프레임워크는 한꺼번에 특정 HTML 요소의 속성들을 추가할 수 있게 해주는 DetailedHTMLProps와 HTMLAttributes 타입을 제공합니다.

export default function UsingIconWithCSSClass() {
  return (
    <div>
      <h3>UsingIconWithCSSClass</h3>
      <Icon name="home" className="text-blue" />
      <Icon
        name="check_circle_outline"
        className="text-red"
        style={{ fontSize: '50px' }}
      />
    </div>
  )
}
