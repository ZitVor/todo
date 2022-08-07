 import './App.css';
import AsidePanel from './components/app-page/aside-panel/aside-panel';
import {Registration} from './components/registration/registration'
import { 
  Route,
  Router,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import { useState } from 'react';
import Login from './components/login-page/login-page';

import LoginPage from './components/login-page/login-page';
import Navigation from './components/navigation/Navigation';

function App(){ 

  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
    
      <div className='App'>
      <main>
        <Navigation/>
        <Routes>
          <Route path="/asidepanel" element={<AsidePanel/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
            <Route
              path="*"
                element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
      }
    />
        </Routes>
      </main>
      </div>
  )
}

export default App;
