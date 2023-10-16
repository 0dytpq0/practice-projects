// 사용자의 선택을 입력받는 대화 상자는 크게 모덜리스(modeless)와 모달(modal) 2가지 종류가 있다.
// 모덜리스 대화 상자는 영역 바깥 쪽을 클릭할 수 있지만, 모달 대화 상자는 바깥 쪽의 UI가 동작하지 않는다.
// 웹페이지는 모두 모달 대화 상자이다.

// daisyui는 모달 대화 상장 CSS 컴포넌트를 제공한다
// 크게 modal, modal-box, modal-action 등 3가지 클래스로 구성하며, modal 클래스에 modal-ope 클래스를 추가하면 대화 상자가 화면에 나타난다.

import type { FC } from 'react'
import type { ReactDivProps } from '../../components'
import { Div } from '../../components'
import { Icon } from './Icon'

export type ModalProps = ReactDivProps & {
  open?: boolean
}
export const Modal: FC<ModalProps> = ({ open, className: _className, ...props }) => {
  const className = ['modal', open ? 'modal-open' : '', _className].join(' ')
  return <div {...props} className={className} />
}
export type ModalContentProps = ReactDivProps & {
  onCloseIconClicked?: () => void
  closeIconClassName?: string
}
export const ModalContent: FC<ModalContentProps> = ({
  onCloseIconClicked,
  closeIconClassName: _closeIconClassName,
  className: _className,
  children,
  ...props
}) => {
  const showCloseIcon = onCloseIconClicked ? true : false
  const className = ['modal-box', showCloseIcon && 'relative', _className].join(' ')
  if (!showCloseIcon) return <div {...props} className={className} children={children} />

  const closeIconClassName = _closeIconClassName ?? 'btn-primary btn-outline btn-sm'
  return (
    <div {...props} className={className}>
      <Div className="absolute" right="0.5rem" top="0.5rem">
        <Icon name="close" className={closeIconClassName} onClick={onCloseIconClicked} />
      </Div>
      {children}
    </div>
  )
}

export type ModalActionProps = ReactDivProps & {}
export const ModalAction: FC<ModalActionProps> = ({
  className: _className,
  ...props
}) => {
  const className = ['modal-action', _className].join(' ')
  return <div {...props} className={className} />
}
