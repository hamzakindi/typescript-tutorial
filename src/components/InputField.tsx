import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}
// Commit on master

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }}>

      <input ref={inputRef}
        type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task' className='input__box'></input>
      <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
