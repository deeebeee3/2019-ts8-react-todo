import React, { Fragment, useState } from "react";

export default function App(): JSX.Element {

  const [value, setValue] = useState<string>('');
  //const [value, setValue] = useState<string>(() => { return 'function that returns string' });
  //function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

  type FormElem = React.FormEvent<HTMLFormElement>

  const handleSubmit = (e:FormElem):void => {
    e.preventDefault();
    setValue('');
  }


  return (
    <Fragment>
      <h1>Form with TS</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  );
}
