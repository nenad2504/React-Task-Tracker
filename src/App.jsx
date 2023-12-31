import { useState } from "react";
import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx'

function App() { 
  const name = "all";

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]);

// Add Task
const addTask = (task) => {
  console.log(task);
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id != id));
};

//Toogle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <>
    <div className='container'>
      <Header ime={name} />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
    
    </>
  )
}

export default App
