export const onChangeInputs = ({
  inputValue,
  todoData,
  setTodoData,
  setter,
}) => {
  setTodoData(() => ({
    title: inputValue,
    description: todoData.description,
  }));
  setter(inputValue);
};
