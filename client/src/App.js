
import './App.css';
import TodoList from './components/todo-list/todo-list';
import AsidePanel from './components/aside-panel/aside-panel';
import Spinner from './components/spinner/spinner';

function App() {
  const todoData=[
    {label:'Task1', important:true, id:1},
    {label:'Task2', important:false, id:2},
    {label:'Task3', important:true, id:3},
    {label:'Task4', important:true, id:4},
  ]
  return (
    /*<div className="App">
      <AsidePanel/>
      <div>
        <TodoList todos={todoData} />
      </div>
    </div>*/
    <Spinner/>
  );
}

export default App;
