import React, { Fragment, useState } from "react";

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  //const [value, setValue] = useState<string>(() => { return 'function that returns string' });
  //function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

  const [todos, setTodos] = useState<ITodo[]>([]);

  //a type references another existing type
  type FormElem = React.FormEvent<HTMLFormElement>;

  //an interface creates a new type
  interface ITodo {
    text: string;
    complete: boolean;
  }

  //an example of extending an interface
  interface ITodo2 extends ITodo {
    tags: string[];
  }

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const updatedTodos: ITodo[] = [...todos, { text: text, complete: false }];
    setTodos(updatedTodos);
  };

  const completeTodo = (index: number): void => {
    const updatedTodos: ITodo[] = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    setTodos(updatedTodos);
  };

  return (
    <Fragment>
      <h1>Form with TS</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <Fragment key={index}>
              <div style={{textDecoration: todo.complete ? 'line-through': ''}}>{todo.text}</div>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
}
