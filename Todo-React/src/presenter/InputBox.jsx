import { useState } from "react";
import { onChangeInputs } from "../container/Input";

export const InputBox = () => {
  const [context, setContext] = useState("");
  const [title, setTitle] = useState("");
  console.log("context", context);
  console.log("title", title);
  return (
    <div>
      <input
        onChange={(e) => {
          const inputValue = onChangeInputs(e);
          setContext(inputValue);
        }}
      />
      <input
        onChange={(e) => {
          const inputValue = onChangeInputs(e);
          setTitle(inputValue);
        }}
      />
    </div>
  );
};
