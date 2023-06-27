import React, { SetStateAction, useRef } from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<SetStateAction<string>>,
    handleAdd: (e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}:Props )=> {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={e=>{
        inputRef.current?.blur();
        handleAdd(e)}}>
        <input ref={inputRef} value={todo} onChange={e=>setTodo(e.target.value)} type="text"  placeholder='Enter a task' className='input__box'/>
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField