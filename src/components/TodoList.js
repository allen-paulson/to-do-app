import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import EditTodoList from './EditTodoList'

const TodoList = ({todoList, toggleComplete, deleteTodo, editTodo ,editTask}) => {
  return (
    
      todoList.map((task) => {
        return(
          task.isEditing ? (
            <EditTodoList editTask={editTask} task={task} />
          ) : (
            <div className='Todo'>
            <p className={`${task.isComplete ? 'completed' : ''}`}>{task.taskName}</p>
            <div className='todo-option-container'>
              <AiFillCheckSquare onClick={ () => {toggleComplete(task.id)}} className='todo-options' />
              <AiFillEdit onClick={ () => {editTodo(task.id)}}className='todo-options' />
              <AiFillDelete onClick={ () => {deleteTodo(task.id)}} className='todo-options' />
            </div>
            
          </div>
          )
          
        )
        
      })
      
    
  )
}

export default TodoList
