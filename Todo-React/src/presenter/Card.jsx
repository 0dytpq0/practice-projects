import { onCompleteTodo } from "../container/Complete";
import { onDeleteTodo } from "../container/Delete";
import { Button } from "./Button";

export const Card = ({ allTodos, setAllTodos, isDone }) => {
  const doneTodos =
    allTodos &&
    allTodos.filter((item) => {
      return item.completed === true;
    });
  const haveTodos =
    allTodos &&
    allTodos.filter((item) => {
      return item.completed === false;
    });
  const cards = isDone
    ? doneTodos &&
      doneTodos.map((todo) => (
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
    : haveTodos &&
      haveTodos.map((todo) => (
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
