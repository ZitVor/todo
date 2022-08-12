//import { json } from "body-parser";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/auth.hook";
import {useHttp} from '../../hooks/http.hooks'
const LoginPage = (props) => {
    const auth = useContext(AuthContext)
    
    const { login, logout } = useAuth()
    const {loading, request, error, clearError} = useHttp()
    const [form,setForm] = useState({
        email:'',password:''
    })
    const changeHandler = event=>{
        setForm({...form,[event.target.name]:event.target.value})
    }
    const handleLogIn = (e) => {
       e.preventDefault()
    }
    const logoutHandler = async (req,res) => {
        auth.logout()
    }
    const loginHandler = async (req,res) => { 
        
        try{
            console.log('hello')
            let a = await fetch('http://localhost:5000/api/auth/login',{ method: "Post",
            headers: {
                "Content-Type": "application/json"
            },body: `{"email":"${form.email}","password":"${form.password}"}` 
            }).then(res => 
                res.json()
                )
            console.log(a.token)
            auth.login(a.token,a.userId)
        }   
        
        catch(e){
            console.log(e)
        }
    }

    return(
            <form className="loginForm" onSubmit={handleLogIn}>
                <h2>Авторизация</h2>
                <div>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="email"value={form.email}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input
                         id="password"
                         type="password"
                         name="password"
                         placeholder="password"
                         value={form.password}
                         onChange={changeHandler}
                    />
                </div>
                <div>
                    <button className="blackBtn" type="submit"
                    onClick={loginHandler}>
                        Login
                    </button>
                </div>
                <div>
                    <button className="blackBtn" type="submit"
                    onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
            </form>
        
    )
}
export default LoginPage