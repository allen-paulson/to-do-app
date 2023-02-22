import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [newTask, setNewTask] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault() //prevent page from reloading on submit
    addTodo(newTask)
    setNewTask('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' 
      className='todo-input' 
      placeholder='Create new task' 
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}/>
      <button className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm


