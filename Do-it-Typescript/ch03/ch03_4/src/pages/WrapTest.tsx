// overflow 스타일 속성
// 컨테이너의 크기가 고정되었을 때 콘텐츠의 크기가 컨테이너보다 크면 오버플로(overflow),
// 이럴때 css에서는 hidden(콘텐츠가 크면 안보이게),visible(콘텐츠 커도 보이게),scroll값을 설정
// overflow-auto(overflow: auto;), overflow-hidden, overflow-visible, overflow-scroll

// flex-wrap 스타일 속성
// 콘텐츠를 더이상 수평으로 배치할 수 없을 때 자동으로 다음 줄에 배치.
// flex-wrap, flex-wrap-reverse(마지막 요소를 먼저 배치),nowrap(기본값)
// 수직 방향으로 flex-wrap을 동작시키려면 컨테이너의 height와 height의 최소 크기를 나타내는 min-height 스타일 속성값을 똑같이 설정해 줘야 합니다.

import { Div, Title, Subtitle } from '../components'
import * as D from '../data'

export default function WrapTest() {
  const boxes = D.range(1, 30 + 1).map(number => {
    return (
      <p key={number} className={`border-2 border-blue-300 p-1 mt-1 ml-1`}>
        {number}
      </p>
    )
  })
  return (
    <div className="mt-4">
      <Title>WrapTest</Title>
      <Div className="flex flex-col mt-4 w-1/2 bg-gray-200">
        <Div className="mt-2">
          <Subtitle> flex-row flex-wrap</Subtitle>
          <Div className="flex flex-row flex-wrap p-4">{boxes}</Div>
        </Div>
        <Div className="mt-2">
          <Subtitle> flex-row flex-wrap-reverses</Subtitle>
          <Div className="flex flex-row flex-wrap-reverse p-4">{boxes}</Div>
        </Div>
        <Div className="mt-2">
          <Subtitle> flex-row flex-nowrap</Subtitle>
          <Div className="flex flex-row flex-nowrap p-4">{boxes}</Div>
        </Div>
      </Div>
      <Div className="flex flex-row mt-4 bg-gray-200">
        <Div className="mr-8">
          <Subtitle>flex-column flex-wrap</Subtitle>
          <Div className="flex flex-col flex-wrap p-4 h-40 min-h-40">{boxes}</Div>
        </Div>
        <Div className="mr-8">
          <Subtitle>flex-column flex-wrap-reverse</Subtitle>
          <Div className="flex flex-col-reverse flex-wrap p-4 h-40 min-h-40">{boxes}</Div>
        </Div>
        <Div className="mr-8">
          <Subtitle>flex-column flex-nowrap</Subtitle>
          <Div className="flex flex-col flex-nowrap p-4 h-40 min-h-40">{boxes}</Div>
        </Div>
      </Div>
    </div>
  )
}
