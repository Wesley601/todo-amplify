import { useState } from 'react'
import { CreateTask } from './CreateTask'
import { TaskList } from './TaskList'

export const Main = (props) => {
  const [tasks, setTasks] = useState([])

  const createTask = (task) => {
    const taskToSave = task.trim()
    if (taskToSave === '') {
      alert('task cant be empty')
      return
    }

    setTasks([...tasks, {text: taskToSave, isComplete: false }]);
  }

  const deleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex))
  }

  const updateTask = (taskIndex, taskData) => {
    setTasks(tasks.map((task, index) => index === taskIndex ? taskData : task))
  }

  const toggleTask = (taskIndex) => {
    setTasks(tasks.map((task, index) => {
      if (index === taskIndex) task.isComplete = !task.isComplete
      return task
    }))
  }

  return (
    <div>
      <h1>todos</h1>
      <div>
        <CreateTask createTask={createTask} />
        <br />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} toggleTask={toggleTask} />
      </div>
    </div>
  )
}
