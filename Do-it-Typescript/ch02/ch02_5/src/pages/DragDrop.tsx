// 드래그 앤 드롭 이벤트 처리
// 모든 HTMLElement 상속 요소는 draggable이라는 boolean타입 속성을 제공합니다.
// 아래는 드래그 앤 드롭 관련 이벤트이고, 이벤트 처리기들은 DragEvent 타입을 배개변수의 타입으로 사용한다.(괄호는 리액트 이벤트 속성 이름)
// dragenter = 드래그한 요소나 텍스트 블록이 적합한 드롭 대상 위에 올라갔을 때 발새한다(onDragEnter)
// dragstart = 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생한다.(onDragStart)
// drag = 요소나 텍스트 블록을 드래그할 때 발생한다.(onDrag)
// dragover = 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때(수백 밀리초마다) 발생한다.(onDragOver)
// dragleave = 드래그하는 요소나 텍스트 블록이 적합한 드롭 대상에서 벗어났을 때 발생합니다.(onDragLeave)
// dragend = 드래그를 끝냈을 때 발생합니다.(onDragEnd)
// drop = 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생한다.(onDrop)

// 리액트는 드래그 앤 드롭 효과와 관련하여 DragEvent 타입을 제공한다. 가장 중요한 속성은 dataTransfer이다.
// dataTransfer 속성은 DataTransfer타입을 가지는데, 파일을 드롭했을 때는 files속성으로 드롭한 파일의 정보를 알 수 있다.
// 그런데 드래그 앤 드롭 이벤트를 처리하려면 EventTarget 타입이 제공하는 preventDefault 메서드를 알아야한다.
// 위 메서드는 사용자 액션에 따라 이벤트가 발쇼ㅐㅇ했을 때 이 이벤트와 관련된 웹 브라우저의 기본 구현 내용을 실행하지 않게 합니다.(예를 들어 새로고침)
// 또한 onDrop 처리기에도 메서드를 호출해 주는 것이 좋다. 파일을 드롭할 때 웹 브라우저는 드롭한 파일을 새로운 창을 열어 보여주기 때문입니다.

import type { DragEvent } from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) =>
    console.log('onDragStart', e.dataTransfer)
  const onDragEnd = (e: DragEvent<HTMLElement>) =>
    console.log('onDragEnd', e.dataTransfer)

  const onDragOver = (e: DragEvent) => e.preventDefault()
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }

  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragEnd}>
        <h1>Drop over Me</h1>
      </div>
    </div>
  )
}
