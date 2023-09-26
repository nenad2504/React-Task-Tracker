const tasks = [
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
];

const taskList = tasks.map(task =>(
    <div key={task.id}>
        <h3>{task.text}</h3>
        <p>Day: {task.day}</p>
        <p>Reminder: {task.reminder ? 'Yes' : 'No'}</p>
    </div>
));

// const filteredTask = tasks.filter(task => task.reminder);

const Tasks = () => {
  return (
    <div className="mt-5">{taskList}</div>
  )
}

export default Tasks