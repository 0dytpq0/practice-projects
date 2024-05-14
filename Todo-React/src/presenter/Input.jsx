export const Input = ({ onChangeFunction }) => {
  return (
    <input
      className="inputBox-input"
      onChange={(e) => {
        onChangeFunction(e);
      }}
    />
  );
};
