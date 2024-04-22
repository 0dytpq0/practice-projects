// 속성의 타입을 모르면 어떻게 하나요?
// 앞서 style 속성의 타입은 CSSProperties입니다. 그런데 코드를 작성하면서 타입을 모를때는
// 나머지 코드를 작성한 다음 <span>의 style부분을 선택한 후 F12를 눌러 [정의로 이동]메뉴를 실행하면 style 속성의 정의가 나타난다.

// 타입스크립트는 ...연산자를 제공한다. 근데 이 연산자는 쓰이는 곳에 따라 전개 연산자로 사용될 때도 있고 잔여 연산자로 사용될 때도 있습니다.
// 이 파일은 매개변수에 잔여 연산자를 적용하여 굳이 style 속성값을 분리하지 않고 props 부분을 분리한 뒤 style = {style}코드를 생략했습니다.
//그런데 이런 방식은 Icon에 className과 같은 속성을 추가하려고 할 때 좀 번거로운 부분이 있습니다.
// 가장 리액트 다운 방식으로 Icon 컴포넌트를 구현해 보겠습니다. -> usingiconwithcssclass.tsxㄱㄱ

import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
// name은 꼭 설정해야 하는 속성이지만 style은 선택속성이므로 ?를 붙입니다.
// 함수형 언어에서는 | 기호를 쓰는 합집합 타입(union type)과 & 기호를 쓰는 교집합 타입(intersection type)이란 구문을 제공한다.
// 즉, IconProps 는 ReactSpanProps타입이면서 동시에 특별히 이름을 짖지 않은 {name: string}인 타입이다.
export type IconProps = ReactSpanProps & {
  name: string
}
// 자바와 같은 객체지향 언어에서는 다음처럼 inerface란 이름의 키워드로 ReactSpanProps를 선언하고,
// extends와 같은 키워드로 ReactSpanProps를 상속하는 형태로 IconProps 인터페이스를 만드는 방식을 사용한다.
// export interface IconProps extends ReactSpanProps{name : string}

// // props대신 비구조화 할당 구문 사용
// export const Icon: FC<IconProps> = ({ name, ...props }) => {
//   // const { name } = props
//   return (
//     <span {...props} className="material-icons">
//       {name}
//     </span>
//   )
// }

// prettier-ignore
export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
const className = ['material-icons', _className].join(' ')
return <span {...props} className = {className}>{name}</span>
}
