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
      <div className="card-container">
        <Card allTodos={allTodos} setAllTodos={setAllTodos} isDone={false} />
      </div>
      <div className="card-container">
        <Card allTodos={allTodos} setAllTodos={setAllTodos} isDone={true} />
      </div>
    </div>
  );
}

export default App;
