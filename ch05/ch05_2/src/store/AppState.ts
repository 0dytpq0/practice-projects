// 앱 수준 상태 AppState를 다시 clock, counter, remoteUser, cards라는 이름의 독립적으로 동작하는 멤버 상태로 구성한 것이다.
// 코드에서  4개의 멤버 상태로 구성했으므로 이를 각각 처리하는 4개의 리듀서가 필요하다.
import * as Clock from './clock'
import * as Counter from './counter'
import * as R from './remoteUser'
import * as Cards from './cards'

export type AppState = {
  clock: Clock.State
  counter: Counter.State
  remoteUser: R.State
  cards: Cards.State
}
