import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    let mystyle = {
        minHeight: "70vh",
        margin: "50px, auto"
    }
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0 ? "No todo list" : 
      props.todos.map((todo)=>{
        return <TodoItem todo = {todo} key={todo.sn} onDelete={props.onDelete}/>
      })}
    </div>
  )
}

export default Todos
