import type { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'
import type { WidthHeight } from './WidthHeight'
import type { LeftRightTopBottom } from './LeftRightTopBottom'
export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom & {
    src?: string
  }

// prettier-ignore
export const Div: FC<DivProps> = ({
  width, height, style: _style,src, className: _className,left, right, top, bottom, ...props
}) => {
  const style = {..._style, width, height,backgroundImage : src && `url(${src})`,left,right,top,bottom}
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} className = {className} style = {style} />
}
// src 속성값이 있을 때 bg-gray-300 클래스를 추가한 것은 네트워크 장애나 아바타 제공 서버가 다운되어 이미지를 얻을 수 없을 때
// 화면에 아무것도 나타나지 않는 것보다는 바탕색이 보이도록 하여 장애가 났음을 알려 주는 역할을 한다.
