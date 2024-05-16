export const Button = ({ className = "", onClickFunction, children }) => {
  return (
    <button className={className} onClick={onClickFunction}>
      {children}
    </button>
  );
};
