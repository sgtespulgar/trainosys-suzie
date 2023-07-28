import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import './add-task.css';
import { addTask } from '../../redux/reducer';

const AddTask: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      //onAddTask(newTask);
      dispatch(addTask(newTask))
      setNewTask('');
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        className="add-task-input"
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
