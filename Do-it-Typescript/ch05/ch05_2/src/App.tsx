import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store'
import ClockTest from './pages/ClockTest'
import CounterTest from './pages/CounterTest'
import RemoteUserTest from './pages/RemoteUserTest'
import CardsTest from './pages/CardsTest/index'

// combineReducers() 함수는 여러 리듀서를 통합하여 새로운 리듀서를 만들어 준다.
// export function combineReducers<S>(reducers: ReducersMapObject<S, any>) : Reducer<BombinedState<S>>
// ReducersMapObject 타입 객체를 입력 매개변수로 받음, 타입 변수 S는 상태를 의미하며 이 절에서는 AppState가 이에 해당.
// combineReducers() 함수의 매개변수 reducers는 ReducersMapObject 타입 객체이다.
// 이 객체의 선언문을 보면 상태 타입의 키에 설정되는 값은 Reducer<State[Key],Action> 타입의 함수여야한다.

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <ClockTest />
      <CounterTest />
      <RemoteUserTest />
      <CardsTest />
    </ReduxProvider>
  )
}
