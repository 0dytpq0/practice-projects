// Class 컴포넌트를 만들려면 react 패키지가 제공하는 Component 클래스를 반드시 상속해야 한다.
// 그리고 Component를 상속한 클래스 컴포넌트는 render라는 이름의 메서드를 포함해야 하며,
// render 메서드는 null이나 React.createElement 호출로 얻은 반환값, 또는 JSX 문 등으로 가상 DOM 객체를 반환해야 합니다
// 여기서 null값은 반환할 가상 DOM객체가 없다는 의미이다.
import { Component } from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'
// 컴포넌트 개념을 도입하면 render 메서드에 JSX 구문뿐만 아니라 다양한 로직을 타입스크립트 코드와 함께 구현할 수 있습니다.
export default class App extends Component {
  render() {
    // 이처럼 타입 스크립트 코드와 JSX 구문을 함께 쓸 수 있게 하는 것이 사용자 컴포넌트를 제작하는 또 다른 이유이다.
    // const isLoading = true
    // if (isLoading) return <p> loading...</p>
    // return (
    //   <ul>
    //     <li>
    //       <a href="http://www.google.com">
    //         <p>Go to Google</p>
    //       </a>
    //     </li>
    //   </ul>
    // )

    // 아래는 단축 평가 형태로 구현하는 방법
    // JSX 구문 분석기는 undefined나 null인 문장은 그냥 무시하면 그만이므로 유효한 JSX 문이 됩니다.
    // 36행은 false이므로 undefined를 반환하지만 무시한다.
    // const isLoading = true
    // const children = (
    //   <li>
    //     <a href="http://www.google.com">
    //       <p> go to Google</p>
    //     </a>
    //   </li>
    // )
    // return (
    //   <div>
    //     {isLoading && <p>loading...</p>}
    //     {!isLoading && <ul>{children}</ul>}
    //   </div>
    // )
    //위 두가지 방법을 결합하면 아래와같은 변수를 만들면된다.
    // const children = isLoading ? (
    //   <p>loading...</p>
    // ) : (
    //   <li>
    //     <a href="http://www.google.com">
    //       <p> go to Google</p>
    //     </a>
    //   </li>
    // )
    // return <div>{children}</div>
    //JSX 문은 결국 React.createElement 호출의 반환값이므로 isLoading값에 따라 분기하는 문 2개를 한 변수에 담음.

    //component 만들어서 사용하는 경우
    // 속성이란? 객체지향 프로그래밍에서의 속성은 클래스의 멤버 변수이다.
    // 하지만 React에서 속성은 부모 컴포넌트에서 자식으로 전달되는 객체 타입의 데이터를 의미한다.
    // 그러므로 React에서 객체지향 관점의 속성은 상태(state)라고 한다.
    // 객체지향 프로그래밍에서 속성은 값을 저장, 변경할 수 있는 기능만 한다.
    // 반면에 리액트에서는 값이 변하면 해당 컴포넌트를 다시 렌더링하여 수정된 속성 값을 화면에 반영하는 기능도 한다.
    // 즉, 리액트 컴포넌트 관점에서 속성은 객체지향 프로그래밍 속성+ 재렌더링을 의미하는 객체 타입 변수입니다.
    // 속성은 XML 마크업 구문에선 attribute라고, 타입스크립트와 같은 프로그래밍 언어에서는 'property를 의미한다.ㅊㅍㅎ쇼46
    return (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to Google" />
        <ArrowComponent href="http://twitter.com" text="go to Twitter" />
      </ul>
    )
  }
}
