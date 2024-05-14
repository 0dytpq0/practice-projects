export const Input = ({ onChangeFunction, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="inputBox-input"
      onChange={(e) => {
        onChangeFunction(e);
      }}
    />
  );
};
