import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {useHttp} from '../../hooks/http.hooks'
const LoginPage = (props) => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form,setForm] = useState({
        email:'',password:''
    })
    const [email, setEmail] =  useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [passwordError, setPaswordError] = useState('Password cannot be empty')

    const changeHandler = event=>{
        setForm({...form,[event.target.name]:event.target.value})
    }
    const handleLogIn = (e) => {
       e.preventDefault()
       props.history.push("/")     
    }

    const loginHandler = async () => { 
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }
        catch(e){}
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Uncorrected email')
        }
        else {
            setEmailError("")
        }
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length >8){
            setPaswordError('Password must be longer than 3 and les than 8')
            if(!e.target.value){
                setPaswordError('Password cannot be short')
            }
            else{
                setPaswordError('')
            }
        }
    }
    const blurHandler =(e)=>{
        // eslint-disable-next-line default-case
        switch (e.target.name){
            case 'email':
                
                break;
            case 'password':
                
                break;
        }
    }

    return(
            <form className="loginForm" onSubmit={handleLogIn}>
                <h2>Авторизация</h2>
                <div>
                {(emailError) && <div style={{color:'tomato'}}>{emailError}</div>}
                    <input
                        className="loginFromInput"
                        type="text"
                        placeholder="Login"
                        onChange={e=> emailHandler(e)} onBlur={e=>blurHandler(e)} 
                        value={form.email}
                        required
                    />
                </div>
                <div>
                {(passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <input
                        className="PasswordFormInput"
                        type="password"
                        placeholder="Password"
                        onChange={e=> passwordHandler(e)} 
                        value={form.password} 
                        onBlur={e=>blurHandler(e)} name='password'
                        required
                    />
                </div>
                <div>
                    <button className="blackBtn" type="submit">
                        Login
                    </button>
                </div>
            </form>
        
    )
}
export default LoginPage