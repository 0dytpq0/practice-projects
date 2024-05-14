export const Button = ({ className, onClickFunction, text }) => {
  return (
    <button
      className={className}
      onClick={() => {
        onClickFunction();
      }}
    >
      {text}
    </button>
  );
};
