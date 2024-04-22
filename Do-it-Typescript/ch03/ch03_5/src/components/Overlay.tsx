// 오버레이를 구현하는 원리는 일단 화면에 꽉차는 Div를 만드는 것.
// 그리고 이 Div를 absolute로 설정하고 z-index를 다른 HTML 요소보다 높게 설정한다. -> div아래의 버튼들 클릭 x
// 뒤의 배경이 보이게 투명도를 설정해주고 자식 요소가 화면 가운데로 오도록 플렉스 레이아웃을 적용해주자.

import type { FC } from 'react'
import type { ReactDivProps } from './Div'
import { Div } from './Div'

export type OverlayProps = ReactDivProps & {
  opacityClass?: string
}

export const Overlay: FC<OverlayProps> = ({
  className: _className,
  opacityClass,
  children,
  ...props
}) => {
  const className = [
    _className,
    'absolute z-50 w-screen h-screen',
    opacityClass ?? 'bg-black/70',
    'flex items-center justify-center'
  ].join(' ')

  // prettier-ignore
  return(
    <Div {...props} className={className} top="0" left="0">{children}</Div>
  )
}
