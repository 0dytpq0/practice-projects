// EventTarget의 dispatchEvent 메서드
// DOM의 최상위 타입인 EventTarget은 다음과 같은 dispatchEvnet 메서드를 제공한다.
// dispatchEvent(event : Event) : boolean;
// 앞서 Event 타입 객체를 다음처럼 만들 수 있다고 했다.
// new Event('click', {bubbles: true})
// 이렇게 생성된 Event 타입 객체는 다음처럼 event나 SyntheticEvent의 target 속성값이 되는 타깃_DOM_객체의 dispatchEvent 메서드를 호출하여 이벤트를 발생시킬 수 있다.
// 타깃_DOM_객체.dispatchEvent(new Event('click', {bubbles: true}))
// 그런데 흥미롭게도 모든 DOM 객체의 부모 타입인 HTMLElement는 click 메서드를 제공한다.
// 다음 코드는 앞의 dispatchEvent 코드와 완전히 똑같이 동작한다. 이는 click 메서가 dispatchEvent코드로 구현되었음을 짐작케 합니다.
// 타깃_DOM_객체.click()

export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    console.log('onCallDispatchEvent')
    document.getElementById('root')?.dispatchEvent(new Event('click', { bubbles: true }))
  }
  const onCallClick = () => {
    console.log('onCallClick')
    document.getElementById('root')?.click()
  }
  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call DispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  )
}
