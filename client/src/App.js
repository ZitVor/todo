 import './App.css';
import AsidePanel from './components/app-page/aside-panel/aside-panel';
import {Registration} from './components/registration/registration'
import {Route,Routes} from 'react-router-dom';
import {useContext} from 'react';
import Login from './components/login-page/login-page';
import Navigation from './components/navigation/navigation';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
//const storageName = 'userData'

export default function App(){ 
  const auth = useContext(AuthContext)
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token

  if(isAuthenticated){
    return(
      <AuthContext.Provider value = {{token,login, logout, userId}}>
        <AsidePanel/>
      </AuthContext.Provider>
    )
  } 
  else 
  {
  return(
    <AuthContext.Provider value = {{token,login, logout, userId}}>
      <main>
    <Navigation/>
    <AuthContext.Consumer>
      {value => <h1>Token:{value.userId}</h1>}
    </AuthContext.Consumer>
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
  </AuthContext.Provider>
  )
}
}


