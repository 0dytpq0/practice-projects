import type { Actions } from './actions'
import type { AppState } from './AppState'

// 첫번째 매개변수에 담긴 과거 상탯값(preState)을 바탕으로 새로운 상탯값(newState)을 반환한다는 리듀서 함수의 목적이 분명해진다.
// export const rootReducer = (prevState: AppState = initialAppState, action: Action) => {
//   const newState = { ...prevState } //깊은 복사 필요
//   return newState
// }
const initialAppState = {
  today: new Date()
}

export const rootReducer = (state: AppState = initialAppState, action: Actions) => {
  switch (action.type) {
    case 'setToday': {
      return { ...state, today: action.today }
    }
  }
  return state
}
// 이 코드는 액션이 SetTodayAction 타입이 아니면 state값을 변경하지 않고 그대로 반환한다는 의미를 보여준다.
