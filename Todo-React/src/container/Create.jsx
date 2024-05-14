const onCreate = ({ setAllTodos, allTodos, newTodo }) => {
  setAllTodos((prev) => [newTodo, ...prev]);
  allTodos.length === 0
    ? localStorage.setItem("todos", JSON.stringify(newTodo))
    : localStorage.setItem("todos", JSON.stringify([newTodo, ...allTodos]));

  console.log("newTodo", newTodo);
};

export { onCreate };
