// toolkit으로 오면서 modules라는 폴더가 아닌 slices폴더를 쓰는 것이 컨벤션

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    removeNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, removeNumber } = counterSlice.actions;
export default counterSlice.reducer;
