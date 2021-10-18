import '../styles/App.css'
import React, { useState  } from 'react'

const Form = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form
      className='input-section'
      onSubmit={ handleSubmit }
    >
      <input
        type='text'
        className='input'
        placeholder='Новое дело...'
        value={ value }
        onChange={ e => setValue(e.target.value) }
      />
      <button
        type='submit'
        className='add-button'
      >
        Добавить
      </button>
    </form>
  )
}

export default Form
