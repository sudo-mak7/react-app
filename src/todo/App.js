import './styles/App.css'
import React from 'react'
import Form from './components/Form'
import Todo from './components/Todo'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const App = () => {
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

        <Todo
          loading={ loading }
          todos={ todos }
          completeTodo={ completeTodo }
          removeTodo={ removeTodo }
        />
      </main>
    </div>
  )
}

export default App
