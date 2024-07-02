// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface UserInfo {
  [key: string]: any;
}

interface AuthState {
  isAuthenticated: boolean;
  curUserInfo: UserInfo;
  signIn: (info: UserInfo) => void;
  signOut: () => void;
}
// Omit -> 'omit' 유틸리티 타입은 주어진 타입에서 특정 키를 제거한 타입을 만든다.
/// 여기선 signIn 과 signOut 메서드를 제외한 상태만을 포함하도록 하기 위해 사용된 것
const initialState: Omit<AuthState, "signIn" | "signOut"> = {
  isAuthenticated: false,
  curUserInfo: {},
};

// actions 함수 내의 'set' 인자는 zustand의 set 함수이다.
// 이 set 함수는 상태 업데이트를 위해 사용되며, 부분적인 상태 업데이트를 허용한다.
// `partial`은 상태 객체의 일부를 나타내기 위해 사용된다.
// `zustand`에서 `set`함수는 전체 상태 객체를 덮어쓰지 않고 부분적인 업데이트를 사용할 수 있다.

const actions = (set: (partial: Partial<AuthState>) => void) => ({
  signIn: (info: UserInfo) => {
    set({ isAuthenticated: true, curUserInfo: info });
  },
  signOut: () => {
    set({ isAuthenticated: false, curUserInfo: {} });
  },
});
// 이 에러는 create 함수의 호출 시 인자로 전달된 상태 생성자(StateCreator)가 예상과 다른 타입으로 전달되어 발생하는 것입니다. zustand에서 persist 미들웨어를 사용할 때는 StateCreator의 타입이 특정 형식을 준수해야 합니다.

// 문제는 StateCreator<AuthState, [], [["zustand/persist", AuthState]]>이라는 타입이 기대되지 않는 형태라는 것입니다. StateCreator는 기본적으로 [] 혹은 비어있는 배열을 기대하지만, 여기서는 ["zustand/persist", AuthState]와 같이 배열이 포함된 형태로 전달되고 있어서 문제가 발생합니다.

// 해결 방법은 persist 미들웨어의 사용 방식을 수정하여 StateCreator 타입이 기대하는 형식에 맞추는 것입니다. persist 미들웨어는 StateCreator 함수의 두 번째 매개변수로 전달되어야 하며, 타입스크립트에서 제대로 인식할 수 있도록 타입을 정확히 지정해야 합니다.
const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialState,
      ...actions(set),
    }),
    {
      name: "auth-store",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;

// 요청 로그인 했을 때만 가능
// 어볼트컨트롤러 요철을 중간에 멈추게하는 도구
// 인터셉터를 사용하려면
