import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './scss/style.scss';
function App() {
  return (
    <div className="todo-app">
      <TodoList/>
        {/* <TodoForm/> */}
    </div>
  );
}

export default App;
