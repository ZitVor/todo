import { Component, useState } from "react";
import { ReactDOM } from "react";
import {createPortal} from 'react-dom'

const CreateList = () => {
    const [task,taskName] = useState()

    const handleCreateTask = (e) => {
        e.preventDefault()
     }
    
    const submitHandler = async (req,res) => { 
        try{
            //!!!!!!!!!!!!!!
            let a = await fetch('http://localhost:5000/api/auth/createlist',{ method: "Post",
            headers: {
                "Content-Type": "application/json"
            },body: task
            }).then(res => 
                res.json()
                )
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
                    placeholder="list name"value={task}
                    // onChange={changeHandler}
            />
                </div>
                <div>
                    <button className="blackBtn" type="submit"
                    onClick={submitHandler}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
export default CreateList