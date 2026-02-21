import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo, onUpdate, onDelete}) => {
  const { text, status, id } = todo;
  const handleChange = (e) => { 
    onUpdate({ ...todo, status: e.target.checked ? 'complete' : 'active' });
  }
  const handleDelete = () => { 
    onDelete(todo);
  }
  return (
    <li>
      <input type="checkbox" id={id} checked={status === 'complete'} onChange={handleChange} />
      <label htmlFor={id}>{text}</label>
      <span>
        <button onClick={handleDelete}><FaRegTrashAlt /></button>
      </span>
    </li>
  )
}

export default Todo
