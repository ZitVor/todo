
import './App.css';
import TodoList from './components/todo-list/todo-list';
import AsidePanel from './components/aside-panel/aside-panel';
import Task from './components/task/task';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Header from './header/header';
import LandingPage from './components/landing-page/landing-page';
//import Spinner from './components/spinner/spinner';

function App(){ 

  return(
    <div className='App'>  
        <h1>Protected Route</h1>
        <Routes>
        <Route  path='/'  element={<LandingPage/>}/>
        <Route  path='aside' element={<AsidePanel/>}/>
        <Route path='*' element={() => "404 not found"}/>
        </Routes>
    </div>
  )
}

export default App;
