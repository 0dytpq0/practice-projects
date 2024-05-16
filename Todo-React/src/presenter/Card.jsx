import {
  isDoneFunc,
  onCompleteTodo,
  onDeleteTodo,
} from "../container/TodoFunctions";
import { Button } from "./Button";

const makeCard = (todos = [], allTodos = [], setAllTodos, isDone) => {
  return todos.map((todo) => (
    <div
      key={todo.id}
      className={isDone === true ? "card done" : "card working"}
    >
      <div className="card-title">{todo.title}</div>
      <div className="card-description">{todo.description}</div>
      <div className="card-buttonBox">
        <Button
          onClickFunction={() => onDeleteTodo({ todo, allTodos, setAllTodos })}
          text="삭제"
        />
        <Button
          onClickFunction={() =>
            onCompleteTodo({ todo, allTodos, setAllTodos })
          }
          text={isDone === true ? "취소" : "완료"}
        />
      </div>
    </div>
  ));
};

export const Card = ({ allTodos = [], setAllTodos, isDone }) => {
  const { doneTodos, haveTodos } = isDoneFunc({ allTodos });
  console.log("doneTodos, haveTodos", doneTodos, haveTodos);
  const cards = isDone
    ? makeCard(doneTodos, allTodos, setAllTodos, isDone)
    : makeCard(haveTodos, allTodos, setAllTodos, isDone);

  return cards;
};
