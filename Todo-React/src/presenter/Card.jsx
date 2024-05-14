export const Card = ({ allTodos }) => {
  const cards = allTodos.map((todo) => (
    <div key={todo.id} className="card">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  ));

  return cards;
};
