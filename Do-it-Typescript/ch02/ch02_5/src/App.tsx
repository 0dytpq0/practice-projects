import EventListener from './pages/EventListener'
import OnClick from './pages/OnClick'
import ReactOnClick from './pages/ReactOnClick'
import DispatchEvent from './pages/DispatchEvent'
import EventBubbling from './pages/EventBubbling'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'
import OnChange from './pages/OnChange'
import FileInput from './pages/FileInput'
import DrageDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop'
// Event xkdlq = dnpq qmfkdnwjdml JS dpswlsdms Evnet 타입을 제공한다. 아래는 이벤트의 주요 속성과 의미 정리
// type = 이벤트 이름으로 대소 문자 구분 x , isTrusted = 이벤트가 웹 브라우저에서 발생한 것인지(True), 프로그래밍으로 발생한 것인지(False) 판단
// target = 이벤트가 처음 발생한 HTML 요소이다. , currentTarget = 이벤트의 현재 대상, 즉 이벤트 버블링 중에서 이벤트가 현재 위치한 객체입니다.
// bubbles = 이벤트가 DOm을 타고 버블링될지 여부를 결정한다.
export default function App() {
  return (
    <div>
      <FileDrop />
      <DrageDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      {/* <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener /> */}
    </div>
  )
}
