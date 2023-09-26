import { FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete}) => {
  return (
    <div className="task">
     <h3 className="d-flex justify-content-between align-items-center">
        {task.text}
        <span style={{ margin: '0' }}><FaTimes style={{ marginRight: '5px', color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></span>
    </h3>
    <p>{task.day}</p>
    </div>
  )
}

export default Task