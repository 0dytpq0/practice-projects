import { onToggle } from "../utils/Toggle";

export const onCompleteTodo = ({ todo, setAllTodos }) => {
  const isCompleted = onToggle(todo.completed);
  setAllTodos((prev) =>
    prev.map((item) =>
      item.id === todo.id ? { ...item, completed: isCompleted } : item
    )
  );
};