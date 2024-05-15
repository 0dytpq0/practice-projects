import { useState } from "react";
import "./index.css";
import { Card } from "./presenter/Card";
import { InputBox } from "./presenter/InputBox";

function App() {
  const [allTodos, setAllTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  return (
    <div className="container">
      <InputBox allTodos={allTodos} setAllTodos={setAllTodos} />
      <div className="container-title working-title">Working!</div>
      <div className="card-container">
        <Card allTodos={allTodos} setAllTodos={setAllTodos} isDone={false} />
      </div>
      <div className="container-title done-title">Done!</div>
      <div className="card-container">
        <Card allTodos={allTodos} setAllTodos={setAllTodos} isDone={true} />
      </div>
    </div>
  );
}

export default App;
