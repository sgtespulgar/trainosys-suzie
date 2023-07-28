import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import './task.css';
import { RootState } from '../../redux/store';
import { doneTask, deleteTask, editTask } from '../../redux/reducer';

interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
}

const Task: React.FC<TaskProps> = ({id, name, completed}) => {
  
  const task  = useSelector((state: RootState) => state.tasks.tasks[state.tasks.tasks.length-1])

  const dispatch = useDispatch();
 ;

  const handleEditTask = () => {
    const newName = prompt('Enter the new task name:', name);
    if (newName && newName.trim() !== '') {
      dispatch(editTask({id, newName}));
    }
  };

  // const handleDeleteTask = () => {
  //   onDeleteTask(id);
  // };

  return (
    <li className="task-item">
      <span className={`task-name ${completed ? 'completed' : ''}`}>{name}</span>
      <div className="task-actions">
        <button onClick={() => dispatch(doneTask(id))} className="done-icon">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button onClick={handleEditTask} className="edit-icon">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={() => dispatch(deleteTask(id))} className="delete-icon">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
    
  );
};

export default Task;
