import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { TaskList } from '../models/TaskListProps';
import { FaRegCircleCheck, FaRegCircleXmark, FaRegPenToSquare, FaRegTrashCan, FaRegSquare } from "react-icons/fa6";

function TaskComponent(props : any){

  const { todo, setTodos, completeTodo, deleteTodo, editTodo } = props;  
  const [inputValue, setInputValue] = useState('');

  const handleComplete = () => {
    completeTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setTodos((prevTodos : TaskList[]) =>
      prevTodos.map(_t =>
        _t.id === todo.id ? { ..._t, edit: true} : _t
      )
    );
    setInputValue(todo.taskName)
  };

  const handleSaveEdit = () => {
    console.log("selected "+ inputValue) 
    setTodos((prevTodos : TaskList[]) =>
      prevTodos.map(_t =>
        _t.id === todo.id ? { ..._t, edit: false, taskName: inputValue} : _t
      )
    );
    console.log("selected "+ JSON.stringify(todo))
  };

  const handleCancelEdit = () => {
    setTodos((prevTodos : TaskList[]) =>
      prevTodos.map(_t =>
        _t.id === todo.id ? { ..._t, edit: false} : _t
      )
    );
    console.log("selected "+ JSON.stringify(todo))
  };

  return (
    <div  className="todo">
      <Button variant="outline-secondary" onClick={handleComplete} hidden={todo.edit}><FaRegSquare /></Button>
      
      <input type='text' name="taskName" value={inputValue} onChange={e => setInputValue(e.target.value)} hidden={!todo.edit}></input>  
      <span hidden={todo.edit}>{todo.taskName}</span>
      
      
      <div>
        <Button variant="outline-success" onClick={handleSaveEdit} hidden={!todo.edit}><FaRegCircleCheck /></Button>
        <Button variant="outline-danger" onClick={handleCancelEdit} hidden={!todo.edit}><FaRegCircleXmark /></Button>
      </div>
         
      <div>
        <Button variant="outline-info" onClick={handleEdit} hidden={todo.edit}><FaRegPenToSquare /></Button>
        <Button variant="outline-danger" onClick={handleDelete} hidden={todo.edit}><FaRegTrashCan /></Button>
      </div>
      
      
    </div>
  );
}

export default TaskComponent;