import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
        id:null,
        value: ''
    })
  }

  if (edit.id) { 
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }
  return todos.map((elem, index) => {
    return (
      <div className={elem.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div
          className=""
          key={elem.id}
          onClick={() => {
            completeTodo(elem.id);
          }}>
          {elem.text}
        </div>
        <div className="icons">
          <AiFillCloseSquare onClick={() => removeTodo(elem.id)} className="edit-icon"  />
          <BiEditAlt
            onClick={() => setEdit({ id: elem.id, value: elem.text })}
            className="delete-icon"
          />
        </div>
      </div>
    );
  });
};

export default Todo;
