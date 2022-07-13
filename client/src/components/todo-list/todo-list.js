import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'

const TodoList=({todos})=>{
    const elements = todos.map((item)=>{
        const {id} = item
        return(
            <li key={id}>
                <TodoListItem {...item}/>
            </li>
        )
    })
    
    return(
        <ul>
            {elements}
        </ul>
    )
}
export default TodoList