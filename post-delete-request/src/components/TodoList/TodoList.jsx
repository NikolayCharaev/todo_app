import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const updateTodo = (todoId, newValue) => { 
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
  }
 
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  return (
    <div>
      <h1>Что будем делать сегодня?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
};

export default TodoList;
