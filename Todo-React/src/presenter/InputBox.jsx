import { useState } from "react";
import { onChangeInputs } from "../container/ChangeInput";
import { onCreate } from "../container/Create";
import { Button } from "./Button";
import { Input } from "./Input";

export const InputBox = ({ allTodos, setAllTodos }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [todoData, setTodoData] = useState({});
  const newTodo = {
    id: new Date().getTime(),
    title,
    description,
    completed: false,
  };
  return (
    <div className="inputBox-container">
      <div className="inputBox-header">header</div>
      <div className="inputBox-section">
        <Input
          onChangeFunction={(e) => {
            const inputValue = e.target.value;
            const setter = setTitle;
            onChangeInputs({ inputValue, todoData, setTodoData, setter });
          }}
        />
        <Input
          onChangeFunction={(e) => {
            const inputValue = e.target.value;
            const setter = setDescription;
            onChangeInputs({ inputValue, todoData, setTodoData, setter });
          }}
        />
        <Button
          className={"inputBox-button"}
          onClickFunction={() => {
            onCreate({ setAllTodos, newTodo, allTodos });
          }}
          text={"create"}
        />
      </div>
    </div>
  );
};
