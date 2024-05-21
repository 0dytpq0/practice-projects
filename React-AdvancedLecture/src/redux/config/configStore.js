// import { combineReducers, createStore } from "redux";
// import counter from "../modules/counter";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

// // 1) rootReducer를 만들거야
// const rootReducer = combineReducers({
//   counter,
// });

// // 2) store를 조합할거야
// const store = createStore();

// // 3) 만든 sotre를 내보낼거야
// export default store;

// toolkit버전

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
