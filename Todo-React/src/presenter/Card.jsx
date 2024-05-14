import { Button } from "../container/Button";
import { onCompleteTodo } from "../container/Complete";
import { onDeleteTodo } from "../container/Delete";

export const Card = ({ allTodos, setAllTodos }) => {
  const cards = allTodos.map((todo) => (
    <div key={todo.id} className="card">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <Button
        onClickFunction={() => onDeleteTodo({ todo, allTodos, setAllTodos })}
        text="delete"
      />
      <Button
        onClickFunction={() => onCompleteTodo({ todo, setAllTodos })}
        text="complete"
      />
    </div>
  ));

  return cards;
};
