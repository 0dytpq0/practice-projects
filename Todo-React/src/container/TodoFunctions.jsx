import { onToggle } from "../utils/Toggle";

const onDeleteTodo = ({ todo, allTodos, setAllTodos }) => {
  const currentTodos = allTodos.filter((item) => item.id !== todo.id);
  setAllTodos(currentTodos);
  localStorage.setItem("todos", JSON.stringify(currentTodos));
};

const onCreate = ({ setAllTodos, allTodos, newTodo }) => {
  setAllTodos((prev) => [newTodo, ...prev]);
  allTodos.length === 0
    ? localStorage.setItem("todos", JSON.stringify([newTodo]))
    : localStorage.setItem("todos", JSON.stringify([newTodo, ...allTodos]));

  console.log("newTodo", newTodo);
};

const onCompleteTodo = ({ todo, allTodos, setAllTodos }) => {
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

export { onCompleteTodo, onCreate, onDeleteTodo };