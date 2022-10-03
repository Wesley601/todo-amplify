import { TaskItem } from './TaskItem'

export const TaskList = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>task</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              id={index}
              deleteTask={props.deleteTask}
              updateTask={props.updateTask}
              toggleTask={props.toggleTask}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
