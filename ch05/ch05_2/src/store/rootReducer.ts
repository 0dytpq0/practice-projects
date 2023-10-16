import { combineReducers } from 'redux'
import * as Clock from './clock'
import * as Counter from './counter'
import * as R from './remoteUser'
import * as Cards from './cards'

export const rootReducer = combineReducers({
  clock: Clock.reducer,
  counter: Counter.reducer,
  remoteUser: R.reducer,
  cards: Cards.reducer
})

// combineReducers() 함수는 리덕스 관련 코드를 어떤 기계적인 패턴으로 구현할 수 있게 해준다.
