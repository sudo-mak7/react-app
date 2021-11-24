import '../../common/styles/style.css'
import React from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { Link } from 'react-router-dom'

const Todo = () => {
  const dbTodoRef = firebase.firestore().collection('todos')

  const [todos, loading] = useCollectionData(
    dbTodoRef.orderBy('createdAt', 'desc')
  )

  const addTodo = async text => {
    const ref = await dbTodoRef.doc()

    try {
      await ref.set({
        id: ref.id,
        text,
        completed: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
    } catch (e) {
      console.warn(e)
    }
  }

  const completeTodo = async id => {
    try {
      const isCompleted = await dbTodoRef.doc(id).get().then(snapshot => snapshot.data().completed)
      await dbTodoRef.doc(id).update({completed: !isCompleted})
    } catch (e) {
      console.warn(e)
    }
  }

  const removeTodo = async id => {
    try {
      await dbTodoRef.doc(id).delete()
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <div className="App">
      <main className="container">
        <header>
          <h1>Список дел</h1>
        </header>

        <Form addTodo={ addTodo }/>

        <TodoList
          loading={ loading }
          todos={ todos }
          completeTodo={ completeTodo }
          removeTodo={ removeTodo }
        />

        <Link to='/tic-tac-toe'>
          <div className="to-tictactoe-label">
            <p>Крестики-<br/>нолики</p>
          </div>
        </Link>
      </main>
    </div>
  )
}

export default Todo
