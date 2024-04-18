
import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
        <h5>{todo.title}</h5>
        <p>{todo.description}</p>
        <button className="btn btn-danger" onClick={ ()=>{onDelete(todo)}}>Delete</button><hr/>
    </div>
  )
}

export default TodoItem
