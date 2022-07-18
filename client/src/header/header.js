import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    <header>
          <nav>
            <ul>
              <li>TodoApp</li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/registration">Registration</Link></li>
            </ul>
          </nav>
        </header>
}
export default Header