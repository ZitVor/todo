
import './App.css';
import TodoList from './components/todo-list/todo-list';
import AsidePanel from './components/aside-panel/aside-panel';
import Task from './components/task/task';
//import Spinner from './components/spinner/spinner';

function App() { 
  const todosData=[
    {label:'Task1', important:true, id:1},
    {label:'Task2', important:true, id:2},
    {label:'Task3', important:false, id:3}
  ]
  const task={label:'Task1', important:true, id:1}
  return (
    
      <div className="todo-app">
      <AsidePanel/>
      <div className="main">
      <TodoList todos={todosData}/>
      </div>
      <div className='details-panel'>
      <Task/>
      </div>
      </div>
  );
}

export default App;
