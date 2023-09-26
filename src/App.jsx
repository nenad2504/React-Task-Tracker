import { useState } from "react";
import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx';

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


  return (
    <>
    <div className='container'>
      <Header ime={name} />
      <Tasks tasks={tasks} />
    </div>
    </>
  )
}

export default App
