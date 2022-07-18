import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <header>
        <nav>
          <ul>
            <li>TodoApp</li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
        </nav>
      </header>
    )
}
