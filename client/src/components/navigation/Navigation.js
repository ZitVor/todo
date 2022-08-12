import React from "react";
import {Link, Routes} from 'react-router-dom'

const Navigation=({isAutentificated, setIsAutentificated})=>{
    
    const handleLogOut = () => {
      setIsAutentificated(false);
    }

    return(
      <header>
        {
          isAutentificated ? 
          <nav>
            <ul>
              <li><Link onClick={handleLogOut}
               exact to="/logout">Logout</Link></li>
            </ul>
          </nav>
          : 
          <nav>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/registration">Registration</Link>
</li>
            </ul>
          </nav>
        }
      </header>
    )
}
export default Navigation