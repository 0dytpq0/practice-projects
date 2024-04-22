import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store'

import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'
// useState 훅은 컴포넌트가 유지해야 할 상태를 관리하는 용도로 사용한다.
// 그런데 여러 컴포넌트가 상태들을 함께 공유하는 형태로 만들 때가 많은데, 이처럼 모든 컴포넌트가 함께 공유할 수 있는 상태를 앱 수준 상태 줄여서 앱 상태라고 한다.
// 리덕스는 컨텍스트에 기반을 둔 라이브러리이다. 즉, 리덕스 기능을 사용하려면 리액트 컨텍스트의 Provider 컴포넌트가 최상위로 동작해야한다.

// 타입스크립트 언어로 리덕스 기능을 사용할 때는 먼저 앱 수준 상태를 표현하는 AppState와 같은 타입을 선언해야한다.
// 리덕스 저장소는 AppState 타입 데이터를 저장하는 공간이다.
// 그런데 리덕스 저장소를 생성하려면 리듀서라는 함수를 알아야한다.
// 리덕스에서 리듀서reducer는 현재 상태와 액션이라는 2가지 매개변수로 새로운 상태를 만들어서 반환한다.
// 리듀서 선언문에 나오는 액션은 플럭스에서 온 용어로 type이란 이름의 속성이 있는 평범한 자바스크립트 객체를 의미합니다.
// redux 패키지는 액션 객체의 타입을을 선언하고 있다. => 이 액션 선언문은 type 속성이 반드시 있어야 한다는 의미이다.

// 스토어 객체 관리 함수
// RTK 패키지는 리듀서에서 반환한 새로운 상태를 스토어라는 객체로 정리해 관리하는 configureStore 함수를 제공한다.

// 리덕스 저장소에 어떤 내용이 저장되었는지 알고자 스토어의 상태값을 반환해주는 useSelector훅이 있다.
export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
