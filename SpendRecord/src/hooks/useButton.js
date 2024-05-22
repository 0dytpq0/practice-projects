import { useState } from "react";

const useButton = (initialState) => {
  const [value, setValue] = useState(initialState);
  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
};

export default useButton;
