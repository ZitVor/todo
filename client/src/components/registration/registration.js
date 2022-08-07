
import React, {useState} from 'react'
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
                body: `{"email":"${form.email}","password":"${form.password}"}` // body data type must match "Content-Type" header
              });
          //const data = await request('/api/auth/register', 'POST', {form})
         // console.log(data.message)
        } catch (e) {}
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    // function emailChange(e){
    //     setEmail(e.target.value)
    // }
    // function passwordChange(e){
    //     setPassword(e.target.value)
    // }

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