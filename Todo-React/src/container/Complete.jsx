import { onToggle } from "../utils/Toggle";

export const onCompleteTodo = ({ todo, allTodos, setAllTodos }) => {
  const isCompleted = onToggle(todo.completed);
  setAllTodos((prev) =>
    prev.map((item) =>
      item.id === todo.id ? { ...item, completed: isCompleted } : item
    )
  );
  const completed = allTodos.map((item) =>
    item.id === todo.id ? { ...item, completed: isCompleted } : item
  );
  localStorage.setItem("todos", JSON.stringify(completed));
};
