// z-index 스타일 속성
// 값이 0일수록 모니터에 근접하고 클수록 사람의 눈에 근접하다 ex)z-0(z-index: 0;), z-auto(z-index : auto;)
// 사용자에게 대화 상자를 보여주고 대화 상자 영역 밖의 버튼을 클릭할 수 없게 해야 할 때가 있다 -> 모달 대화 상자라고한다.
// 모달 대화 상자가 나타나면 웹 페이지의 다른 곳을 사용자가 임의로 클릭할 수 없게 하는 화면 UI를 overlay(오버레이)라고 한다.

import { Title, Div, Icon, Overlay } from '../components'

export default function OverlayTest() {
  return (
    <section className="mt-4">
      <Title>OverlayTest</Title>
      <Overlay opacityClass="bg-black/70">
        <Div className="relative flex items-center justify-center p-8 bg-white h-1/2">
          <Div className="absolute" right="1rem" top="1rem">
            <Icon name="close" className="text-gray-500" />
          </Div>
          <p className="text-5xl">modal dialog box</p>
        </Div>
      </Overlay>
    </section>
  )
}
