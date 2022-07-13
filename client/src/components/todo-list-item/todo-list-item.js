import React from 'react'
import '../todo-list-item/todo-list-item.css'
const TodoListItem=({label,important})=>{
    const liStyle={color:important?'tomato':'black'}
    return(
        <div className='list__item'>
            <div style={liStyle}>{label}</div>
            <div><i class="bi bi-trash-fill"></i></div>
        </div>
        
    )
}

export default TodoListItem