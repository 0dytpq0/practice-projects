import React from 'react' //React 17 이후 버전부터는 생략 가능하다.
import ReactDOM from 'react-dom/client'
import * as D from './data'
// React.createElement는 가상 DOM 객체를 만들어 주는 함수지만, HTML 요소가 부모/자식 관계로 구성되면 코드가 지나치게 복잡해지는 문제가 있다.
// 아래가 그 예시로 매우 복잡해진다. JSX 로 구현해본다면?
// const CE = React.createElement

// const rootVirtualDOM = CE('ul', null, [
//   CE('li', null, [
//     CE('a', { href: 'http://www.google.com', target: '_blank' }, [
//       CE('p', null, 'go to google')
//     ])
//   ])
// ])
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)
const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))
// !! 배열을 JSX 문으로 만들 때 주의 사항.
// JSX 문에서 자식 컴포넌트가 여러 개일 때는 반드시 XML 작성 원칙을 준수해야 한다. => XML 문법에서 XML 요소는 부모 없이 존재하지 못한다.
// JSX 역시 XML이므로 컴포넌트 어려개를 배열로 담은 children 변수가 부모 컴포넌트 없이 {children}으로 쓰일 수는 없다.
const rootVirtualDOM = <div>{children}</div>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
