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
        >
          삭제
        </Button>
        <Button
          onClickFunction={() =>
            onCompleteTodo({ todo, allTodos, setAllTodos })
          }
        >
          {isDone === true ? "취소" : "완료"}
        </Button>
      </div>
    </div>
  ));
};

export const Card = ({ allTodos = [], setAllTodos, isDone }) => {
  const { doneTodos, workingTodos } = isDoneFunc({ allTodos });
  const cards = isDone
    ? makeCard(doneTodos, allTodos, setAllTodos, isDone)
    : makeCard(workingTodos, allTodos, setAllTodos, isDone);

  return cards;
};
