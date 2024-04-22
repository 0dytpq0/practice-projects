// 사용자 컴포넌트에서 children속성 사용하기
import type { FC, PropsWithChildren } from 'react'

export type PProps = {}

// const P: FC<PProps> = props => {
//   const { children } = props
//   return <p children={children} />
// }

// JSX {...props} 구문
// props에 담긴 다양한 속성을 마치 타입스크립트의 전개 연산자처럼 <p>에 한꺼번에 전달하는 역할을 합니다.
// 비구조화 할당을 할 필요가 없어짐.
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}
export default P

// 리액트 18버전부터 FC타입에서 children속성을 제거했다.
// 그리고 PropsWithChildren이라는 제너릭 타입을 새롭게 제공하여 children?:ReactNode 부분을 PropsWithChildren 타입으로 대체했습니다.
// 제너릭(generic) : 데이터의 타입을 일반화하다(generalize) => 클래스나 메소드에서 사용할 내부 데이터 타입을 컴파일 시에 미리 지정하는 방법
// => 컴파일 시에 미리 타입검사가 수행된다.
