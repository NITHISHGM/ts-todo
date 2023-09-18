import React, { FC, useState } from "react";
import InputArea from "./components/InputArea";
import { Task } from "./interfaces";
import TodoItem from "./components/TodoItem";

const App: FC = () => {
  const [items, setItems] = useState<Task[]>([]);

  const addItems = (inputText: string): void => {
    setItems((prev: Task[]): Task[] => {
      return [
        ...prev,
        { id: Math.floor(Math.random() * (1000 - 1)) + 1, text: inputText },
      ];
    });
  };
  const deleteItem = (id: number): void => {
    setItems((prev: Task[]): Task[] => {
      return prev.filter((task: Task) => {
        return task.id !== id;
      });
    });
  };
  return (
    <div className="app">
      <div className="conatiner">
        <div className="title">
          <h1>Ts TODO List</h1>
        </div>
        {/* in TSX if you send anyting in the props we should recieve properly in child components or else
         it will throw error like this Type '{ addItems: (inputText: string) => void; }' is not assignable to type 'IntrinsicAttributes'.
         Property 'addItems' does not exist on type 'IntrinsicAttributes'.ts(2322) */}
        <InputArea addItems={addItems} />

        {items.length === 0 ? (
          <>
            <h1 className="no-data">No Items added</h1>
          </>
        ) : (
          <>
            {items.map((item, index) => {
              return (
                <TodoItem
                  key={index}
                  id={item.id}
                  text={item.text}
                  deleteItem={deleteItem}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
