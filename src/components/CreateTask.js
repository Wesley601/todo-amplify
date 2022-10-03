import { useState } from 'react'

export const CreateTask = (props) => {
  const [task, setTask] = useState('')

  const handleInput = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createTask(task)
    setTask('')
  }

  return <form onSubmit={handleSubmit}>
    <input
      autoFocus
      type="text"
      placeholder='Enter task'
      value={task}
      onChange={handleInput}
    />
    <button type="submit">Add</button>
  </form>
}
