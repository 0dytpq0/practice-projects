import { useState } from "react";
import { Button } from "../container/Button";
import { onCreate } from "../container/Create";
import { onChangeInputs } from "../container/Input";

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
    <div>
      <input
        onChange={(e) => {
          const inputValue = onChangeInputs(e);
          setTitle(() => inputValue);
          setTodoData(() => ({
            title: inputValue,
            description: todoData.description,
          }));
        }}
      />
      <input
        onChange={(e) => {
          const inputValue = onChangeInputs(e);
          setDescription(() => inputValue);
          setTodoData(() => ({
            description: inputValue,
            title: todoData.title,
          }));
        }}
      />
      <Button
        onClickFunction={() => {
          onCreate({ setAllTodos, newTodo, allTodos });
        }}
        text={"create"}
      />
    </div>
  );
};
