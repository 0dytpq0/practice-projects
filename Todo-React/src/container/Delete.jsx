export const onDeleteTodo = ({ todo, allTodos, setAllTodos }) => {
  const currentTodos = allTodos.filter((item) => item.id !== todo.id);
  setAllTodos(currentTodos);
};
