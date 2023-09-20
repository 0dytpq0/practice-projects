// 리액트 컴포넌트의 이벤트 속성에 설정하는 콜백 함수는 매개변수 e의타입이 Event가 아니라 리액트에서 제공하는 SyntheticEventㅏ입을 설정해야 한다.
// 리액트 컴포넌트 관점에서 'synthetic' 이라는 용어는 '모든 종류의 이벤트를 종합한' 정도로 의역할 수 있다.

import type { SyntheticEvent } from 'react'

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e
    console.log('mouse click occurs on <button>', isTrusted, target, bubbles)
  }
  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}
