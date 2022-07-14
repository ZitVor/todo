import React from "react";
import '../task/task.css'

const Task=(props)=>{
    return(
        <div className="task">
            <input className="task__label" type="text" name="label">{props.label}</input>
            <textarea className="task__description">Something</textarea>
            <button className="task__button">Change</button>
        </div>
    )
}
export default Task