import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navigation from "../../navigation/Navigation";
import Header from "../../navigation/Navigation";
import AsidePanel from "../app-page/aside-panel/aside-panel";
import Login from "../login-page/login-page";
import Registration from "../registration/registration"

export default function LandingPage(){
    return(
      <div>
         <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registration">Registration</Link>
</li>
        </ul>
        Hi
        <Routes>
        <Route  path='login'  element={<Login/>}/>
        <Route  path='registration'  element={<Registration/>}/>
        <Route path="*" element={<h2>Not found</h2>}></Route>
        </Routes>
      </div>
    )
}
