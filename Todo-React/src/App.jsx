import { useState } from "react";
import "./App.css";
import { Card } from "./presenter/Card";
import { InputBox } from "./presenter/InputBox";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  return (
    <>
      <InputBox allTodos={allTodos} setAllTodos={setAllTodos} />
      <Card allTodos={allTodos} setAllTodos={setAllTodos} />
    </>
  );
}

export default App;
