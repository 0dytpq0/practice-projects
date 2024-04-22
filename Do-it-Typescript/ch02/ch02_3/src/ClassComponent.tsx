import { Component } from 'react'

type ClassComponentProps = {
  href: string
  text: string
}
//Props 를 선언하는 자리에 Props를 넣어준다면 this.props.href식으로 사용하면 된다.
// render 메서드만 의미가 있고, 나머지 코드는 render 메서드를 구현할 수 있게 하는 프로그래밍 언어의 문법을 갖추는 코드 일뿐이다.
// // 그렇기에ㅔ 리액트 개발 팀은 이에 주목하여 render 메서드 부분을 간단히 구현하고자 함수형 컴포넌트를 만든다.
export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const { href, text } = this.props
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}

// 함수형
// 타입 스크립트에서 화살표함수는 이름을 가질 수 없는 익명 함수입니다. 따라서 App이라는 변수에 익명 함수를 설정하는 방식으로 구현해야한다.
// 그런데 타입스크립트 문법은 01행과 같은 형태는 export default를 붙이지 못하므로 04행이 필요하다.
// const App = () => {
//   return <h1>function component</h1>
// }
// export default App

// 타입 스크립트 import type 구문
// 다음 코드에서 FC 타입은 import type 구문을 사용했지만. COMponent 클래스는 단순히 import 구문을 사용한다.
// import type {FC} from 'react'
// import {Component} from 'react'
// 타입 스크립트에서 타입은 자바스크립트로 컴파일할 때만 필요한 정보이다. 그렇기에 컴파일 한 후 type 관련 내용이 완전히 제거된다.
//따라서 앞 코드에서 FC는 컴파일되면 완전히 사라지는 정보이므로 타입스크립트를 컴파일할 때만 필요한 타입은 항상 import type구문으로 구현하겠다.

// 함수 컴포넌트 타입
// React.createElement 선언문의 첫 번째 매개변수의 type의 타입은 FunctionComponent<P>, ClassComponent<P>, string중 하나일 수 있는데,
// 여기서 함수 컴포넌트의 타입은 Function, class는 Class이고 이름이 너무 길어 짧게 줄인 FC라는 이름의 타입을 제공한다.
// 결국 함수 컴포넌트의 타입은 FC<P>이다.
