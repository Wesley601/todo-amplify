import { useState } from 'react'

export const TaskItem = (props) => {
  const [task, setTask] = useState(props.task)
  const [isEditing, setIsEditing] = useState(false)

  const deleteTask = () => props.deleteTask(props.id)
  const changeEditing = () => setIsEditing(!isEditing)
  const toggleTask = () => props.toggleTask(props.id)
  const changeTaskText = (e) => {
    setTask({ text: e.target.value, isComplete: task.isComplete })
  }

  const updateTask = (e) => {
    e.preventDefault()
    props.updateTask(props.id, task)
    changeEditing()
  }

  return <tr>
    {
    isEditing ? (
      <>
        <td>
          <form onSubmit={updateTask}>
            <input autoFocus type="text" value={task.text} onChange={changeTaskText} />
          </form>
        </td>
        <td>
          <button onClick={updateTask}>save</button>
          <button onClick={changeEditing}>back</button>
        </td>
      </>
    ) : (
      <>
        <td className='task' onClick={toggleTask}>
          <input type="checkbox" readOnly checked={task.isComplete} />
          <span className={task.isComplete ? 'completed' : 'not-complete'}>
            {task.text}
          </span>
        </td>
        <td>
          <button onClick={changeEditing}>edit</button>
          <button onClick={deleteTask}>delete</button>
        </td>
      </>
  )

    }
  </tr>
}
