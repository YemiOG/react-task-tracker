import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
const App = () => { const [tasks, setTasks] = useState ([
  {
      id: 1,
      text: 'Meeting with Yemi',
      day: 'Feb 5th at 2:30pm',
      reminder: true, 
  },
  {
      id: 2,
      text: 'Doctors Appointment',
      day: 'Feb 6th at 1:30pm',
      reminder: true, 
  },
  {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false, 
  }
])

const addTask = (task) =>{
  console.log(task)
}

const deleteTask = (id) => {setTasks(tasks.filter((task)=>task.id !==id))
 
  
}

const toogleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id===id ? {...task, reminder:
    !task.reminder}:task))
  
}
  return (
    <div className='container'>
      <Header />
      <AddTask onAdd ={addTask}/>
      {tasks.length > 0 ? (
      <Tasks tasks ={tasks}  onDelete = {deleteTask} onToggle = {toogleReminder }/>) : ('NO TASKS TO SHOW!')}
      
    </div>
  )
}

export default App
