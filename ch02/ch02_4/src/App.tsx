// children은 div처럼 자식요소를 포함할 수 있는 컴포넌트에서만 사용할 수 있다. <img>, <input> 처럼 자식 요소를 포함할 수 없는 컴포넌트에서는 사용x
// export default function App() {
//   const texts = ['hello', 'world'].map((text, index) => <p key={index} children={text} />)
//   return <div children={texts} />
// }

// 사용자 컴포넌트에서 children 사용하기
import P from './P'

export default function App() {
  const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} />
}
