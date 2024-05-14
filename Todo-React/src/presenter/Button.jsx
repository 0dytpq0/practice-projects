export const Button = ({ onClickFunction, text }) => {
  return (
    <button
      onClick={() => {
        onClickFunction();
      }}
    >
      {text}
    </button>
  );
};
