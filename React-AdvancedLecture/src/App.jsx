// import styled from "styled-components";
// import "./App.css";
// import GlobalStyle from "./GlobalStyle";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, removeNumber } from "./redux/slices/counterSlice";
// import { addNumber, removeNumber } from "./redux/modules/counter";

// const StBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${(props) => props.borderColor};
//   margin: 20px;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <StBox borderColor="red">박스</StBox>
//     </>
//   );
// }

// export default App;

//useRef 예시
// import { useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const plusStateCountButtonHandler = () => {
//     setCount(count + 1);
//   };

//   const plusRefCountButtonHandler = () => {
//     countRef.current++;
//   };

//   return (
//     <>
//       <div>
//         state 영역입니다. {count} <br />
//         <button onClick={plusStateCountButtonHandler}>state 증가</button>
//       </div>
//       <div>
//         ref 영역입니다. {countRef.current} <br />
//         <button onClick={plusRefCountButtonHandler}>ref 증가</button>
//       </div>
//     </>
//   );
// }

// export default App;

// ContextAPI 예시
// import "./App.css";
// import GrandFather from "./components/GrandFather";

// function App() {
//   return <GrandFather />;
// }

// export default App;

// redux 예시

const App = () => {
  const [count, setCount] = useState(0);
  const counterReducer = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {counterReducer.number}
      <br />
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addNumber(count));
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch(removeNumber(count));
        }}
      >
        빼기
      </button>
    </div>
  );
};

export default App;
