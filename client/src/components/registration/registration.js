
import React, {useState} from 'react'
import { useAuth } from '../../hooks/auth.hook'
import {useHttp} from '../../hooks/http.hooks'

export const Registration = () =>{ 
    const {request} = useHttp()
    
    const [form, setForm] = useState({
      email: '', password: ''
    })
   
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
      }
      const registerHandler = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register',{
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: `{"email":"${form.email}","password":"${form.password}"}` 
              });
            alert(response.email)
        } catch (e) {}
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <form className="loginForm" onSubmit={submitHandler}>
            <h2>Регистрация</h2>
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
                <button 
                className="authorization_btn"
                 onClick={registerHandler}
                 >Registration</button>
            </div>
        </form>
    )
    }