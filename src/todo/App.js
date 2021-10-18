import './styles/App.css'
import React, { useState } from 'react'
import Form from './components/Form'
import Todo from './components/Todo'

const App = () => {
  let tasks = []

  const [todos, setTodos] = useState(tasks)

  const addTodo = text => {
    const newTodos = [
      ...todos.reverse(),
      {
        id: !todos.length ? 1 : todos[todos.length - 1].id + 1,
        text,
        completed: false
      },
    ].reverse()
    setTodos(newTodos)
  }

  const completeTodo = id => {
    const newTodos = [...todos]
    newTodos.forEach((t) => {
      if (t.id === id) {
        t.completed === false
          ? t.completed = true
          : t.completed = false
      }
    })
    setTodos(newTodos)
  }

  const removeTodo = id => {
    const newTodos = [...todos]
    newTodos.forEach((t, i) => {
      if (t.id === id) newTodos.splice(i, 1)
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <main className="container">
        <header>
          <h1>Список дел</h1>
        </header>

        <Form addTodo={ addTodo }/>

        <Todo
          todos={ todos }
          completeTodo={ completeTodo }
          removeTodo={ removeTodo }
        />
      </main>
    </div>
  )
}

export default App
