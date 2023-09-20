import { Title } from '../components'

// 컨테이너와 콘텐츠
// 컨테이너 = 부모 요소 => css에서 border(테두리)와 padding으로 구성된다., 컨텐츠 = 자식요소
// 그럼 컨테이너의 진정한 크기는 ? 테두리 두께 + 패딩 두께 + 콘텐츠 영역 크기라고 계산할 수 있지만 전통적으로 컨텐츠 영역의 크기만을 컨테이너 크기로 봐왔다.
// 그렇기에 CSS 표준은 box-sizing이란 스타일 속성을 제공하여 컨테이너 크기를 결정하게 한다. 기본값은 content-box
// 4가지 = box-sizing : content-box | padding-box | border-box | inherit

// 케스케이딩(cascading)? 위에서 아래로 물이 흐른다라는 의미로 color 스타일 속성값을 명시적으로 설정하지 않으면 부모 요소에 설정한 color 속성값이 적용된다.
// 가까운 부모의 width값은? 없다면 -> 먼부모의 width값은? 으로 올라가면서 width값이 설정된 부모의 값으로 설정된다.

// 뷰포트(viewport) - 웹 페이지에서 사용자가 볼 수 있는 영역. width - vw , height - vh 테일윈드 = w-screen, h-screen

export default function ViewportTest() {
  return (
    <section className="w-screen h-screen mt-4 bg-indigo-900">
      <Title className="text-white">ViewportTest</Title>
    </section>
  )
}
