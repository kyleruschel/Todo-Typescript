import React, { useRef, useState } from "react";

import '../styles/NewTodo.css';

interface Props {
  addHandler: (todoText: string) => void;
}

const NewTodo: React.FC<Props> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState("");

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let enteredText = textInputRef.current!.value;
    props.addHandler(enteredText);
    setVal("");
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
          value={val}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setVal(ev.target.value)
          }
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
