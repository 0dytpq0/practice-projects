import { onCompleteTodo, onDeleteTodo } from "../container/TodoFunctions";
import { Button } from "./Button";

export const Card = ({ allTodos, setAllTodos, isDone }) => {
  const doneTodos = allTodos.filter((item) => {
    return item.completed === true;
  });
  const haveTodos = allTodos.filter((item) => {
    return item.completed === false;
  });
  const cards = isDone
    ? doneTodos.map((todo) => (
        <div key={todo.id} className="card done">
          <div className="card-title">{todo.title}</div>
          <div className="card-description">{todo.description}</div>
          <div className="card-buttonBox">
            <Button
              onClickFunction={() =>
                onDeleteTodo({ todo, allTodos, setAllTodos })
              }
              text="삭제"
            />
            <Button
              onClickFunction={() =>
                onCompleteTodo({ todo, allTodos, setAllTodos })
              }
              text="취소"
            />
          </div>
        </div>
      ))
    : haveTodos.map((todo) => (
        <div key={todo.id} className="card have">
          <div className="card-title">{todo.title}</div>
          <div className="card-description">{todo.description}</div>
          <div className="card-buttonBox">
            <Button
              className="delete-button"
              onClickFunction={() =>
                onDeleteTodo({ todo, allTodos, setAllTodos })
              }
              text="삭제"
            />
            <Button
              className="complete-button"
              onClickFunction={() =>
                onCompleteTodo({ todo, allTodos, setAllTodos })
              }
              text="완료"
            />
          </div>
        </div>
      ));

  return cards;
};
