import React, { FC } from "react";
import { Task } from "../interfaces";

// added deleteItem in task interface
interface Props extends Task {
  deleteItem: (id: number) => void;
}

const TodoItem: FC<Props> = ({ text, deleteItem, id }) => {
  return (
    <div className="todo-item">
      <p>{text}</p>
      <button onClick={() => deleteItem(id)}>Detele</button>
    </div>
  );
};

export default TodoItem;
