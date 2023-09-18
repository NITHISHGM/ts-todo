import React, { ChangeEvent, FC, useState } from "react";

// created interface for accessing props
interface Props {
  addItems: (inputText: string) => void;
}

// like this way "FC<Props>" we should decalre Props interface
const InputArea: FC<Props> = ({ addItems }) => {
  const [inputText, setInputText] = useState<string>("");

  // handleInput flow
  // tsx we should define type to function params
  // here we have used ChangeEvent from "React" bcz there is lot of event is there like click,change,mouseEnter and so on...
  // using HTMLInputElement we can receive the HTML input value
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAdd = (): void => {
    addItems(inputText);
    setInputText("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        className="input-field"
        onChange={handleInput}
        value={inputText}
      />
      <button
        className="btn-add"
        onClick={handleAdd}
        disabled={inputText.length === 0}
      >
        Add
      </button>
    </div>
  );
};

export default InputArea;
