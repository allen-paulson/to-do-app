import React, { useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([])

  const addTodo = (task) => {
    setTodoList([...todoList, {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: task,
      isComplete: false,
      isEditing: false
    }])
  }

  const toggleComplete = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo))
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id ));
    
  }

  const editTodo =(id) => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, taskName: task, isEditing: !todo.isEditing} : todo))
  } 

  return (
    <div className='TodoWrapper'>
      <h1>Keep track of your tasks!</h1>
      <TodoForm addTodo = {addTodo} />
      <TodoList todoList = {todoList} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} editTask={editTask} />  
    
      
    </div>
  )
}

export default TodoWrapper
