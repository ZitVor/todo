import { Component, useContext, useState } from "react";
import { ReactDOM } from "react";
import {createPortal} from 'react-dom'
import { AuthContext } from "../../context/AuthContext";
import {useHttp} from '../../hooks/http.hooks'
const CreateList = () => {
    const [taskName,setTaskName] = useState('')
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const handleCreateTask = (e) => {
        e.preventDefault()
     }
    
    const createListHandler = async () => { 
        try{
            const data = await request('http://localhost:5000/api/list/createlist', 'POST', {name:taskName, owner:auth.userId}, {
                Authorization: `Bearer ${auth.token}`
              })
            //   const data = await fetch('http://localhost:5000/api/list/createlist',{
            //     method:'Post',
            //     header:{
            //         "Content-Type":"application/json"
            //     },
            //     body:`{"name":"${taskName}","owner":"${auth.userId}"}`
            // }).then(res => res.json)
        }   
        catch(e){
            console.log(e)
        }
    }

    return(
        <> 
        <form className="loginForm" onSubmit={handleCreateTask}>
                <h2>Input list name</h2>
                <div>
                    <input
                    id="list"
                    type="text"
                    name="list"
                    placeholder="list name"
                    defaultValue={taskName}
                    // onChange={changeHandler}
            />
                </div>
                <div>
                    <button className="blackBtn" type="submit"
                    onClick={createListHandler}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
export default CreateList