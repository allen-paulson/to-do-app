import React from 'react'
import { useState } from 'react'

const EditTodoForm = ({editTask, task}) => {
  const [newTask, setNewTask] = useState(task.taskName)
  

  const handleSubmit = (e) => {
    e.preventDefault() //prevent page from reloading on submit
    editTask(newTask, task.id)
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' 
      className='todo-input' 
      placeholder='Update task' 
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}/>
      <button className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm


