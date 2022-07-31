import { useState } from "react";
import "./InTe.css";

function Input({ addItemsvalue }) {
  const [inputValue, setInputValue] = useState("");
  let counter = 1;
  const submitHandler = (event) => {
    event.preventDefault();
    const ItemsData = {
      id: counter++,
      title: inputValue,
      date: new Date().toLocaleDateString(),
    };

    addItemsvalue(ItemsData);
    setInputValue("");
  };
  return (
    <form className="input">
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />

      <button onClick={submitHandler} className="button">
        click
      </button>
    </form>
  );
}
export default Input;
