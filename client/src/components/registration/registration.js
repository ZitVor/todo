import React, { useState } from "react";

const Registration = () => {
    const [email, setEmail] =  useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [passwordError, setPaswordError] = useState('Password cannot be empty')

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
                setPaswordError('PAssword cannot be short')
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
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    }


    return(
        <div className="login">
            <form>
                <h3>Login:</h3>
                {(emailDirty && emailError) && <div style={{color:'tomato'}}>{emailError}</div>}
                <input onChange={e=> emailHandler(e)} onBlur={e=>blurHandler(e)} value={email}/>
                <h3>Password</h3>
                {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                <input onChange={e=> passwordHandler(e)} value={password} onBlur={e=>blurHandler(e)} name='password' type='password'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Registration