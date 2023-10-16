import type { Action } from 'redux'
import { AppState } from './AppState'

// 리덕스에서 액션은 저장소의 특정 속성값만 변경하고 싶을 때 사용하는 방법이다.
// 리덕스 액션은 반드시 type이란 이름의 속성이 있어야하므로 redux 패키지는 Action 타입을 제공한다
// 다음 코드는 타입 스크립트의 교집합 타입 구문으로 SetTodayAction 타입에 type이란 속성을 추가해 준다.

// 액션의 type 속성은 리듀서에 switch~case문 같은 분기문을 써서 type 속성에 따라 적절하게 분기하도록 합니다
// 이처럼 액션의 type 속성이 리듀서에 분기문을 구현할 수 있게 해주는 것이므로, type 속성의 타입을 다음처럼 'setToday'로 정할 수 있다.
export type SetTodayAction = Action<'setToday'> & {
  today: Date
}
export type Actions = SetTodayAction
