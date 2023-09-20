// 이벤트 버블링(event bubbling) = 자식 요소에서 발생한 이벤트가 가까운 부모부터 가장 먼 부모 요소까지 계속 전달되는 현상
// 이벤트 버블링이 일어나면 이벤트가 발생한 onButtonClick에서는 e.currentTarget 값이 null이지만,
// 부모 요소의 onDivClick에서는 e.currentTarget값이 <div>의 DOM 객체로 설정된다.

// 이벤트 버블링은 보통 큰 문제는 아니지만 간혹 중단하고 싶을 때가 있다. 이때 SyntheticEvent의 부모인 BaseSyntheticEvent 타입이 제공하는 stopPropagation메서드를 사용한다.
// 이 메서드는 가까운 부모에서 먼 부모쪽으로 이벤트가 버블링되며 전달되는 것을 멈춥니다. 이를 이벤트 캡처링(event capturing)이라고 합니다.
import type { SyntheticEvent } from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e
    console.log('click event bubbles on <div>', isTrusted, target, bubbles, currentTarget)
  }
  const onButtonClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e
    console.log('click event starts at <button>', isTrusted, target, bubbles)
    e.stopPropagation()
  }
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click Me stop Propagation</button>
    </div>
  )
}
