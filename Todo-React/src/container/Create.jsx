export const onCreate = ({ setAllTodos, newTodo, allTodos }) => {
  setAllTodos((prev) => [newTodo, ...prev]);

  allTodos.length === 0
    ? localStorage.setItem("todos", JSON.stringify(newTodo))
    : localStorage.setItem("todos", JSON.stringify([newTodo, ...allTodos]));
};
