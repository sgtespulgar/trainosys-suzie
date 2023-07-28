import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './App.css'
import { RootState } from './redux/store';
import { addTask } from './redux/reducer';
import AddTask from './components/AddTask/AddTask';
import Task from './components/Task/Task';


interface Task {
  id : number;
  title : string;
  completed : boolean;
}

function App() {
  const tasks : Task[] = useSelector((state: RootState) => state.tasks.tasks)
  const dispatch = useDispatch();

  return (
    <div style={{textAlign : 'center', margin: '50px'}}>
      <h1>Task Manager</h1>
      {
        <>
          <AddTask />
          {tasks.length === 0 ? (
          <>
            <h1>No Tasks for today!</h1>
            <p> “When you are asked if you can do a job, tell ’em, 
              ‘Certainly I can!’ Then get busy and find out how to do it.” 
              —Theodore Roosevelt 
            </p>
          </>
          ) : (
            <ul>
              {tasks.map((task) => (
                <Task key={task.id} id={task.id} name={task.title} completed={task.completed} />
              ))}
            </ul>
          )}
        </>
        
      }
    </div>
  )
}

export default App
