import { useState } from 'react';
import TaskComponent from "./TaskComponent";
import { TaskList } from '../models/TaskListProps';
import AddTaskComponent from './AddTaskComponent';
import CompletedTaskComponent from './CompletedTaskComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function BoardComponent(){
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<TaskList[]>([]);
    const [completed, setCompleted] = useState<TaskList[]>([]);
    const [id, setId] = useState(0);

    const handleCompleteTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: true } : todo
            )
        );
        //add to completed list
        let temp : TaskList[];
        temp = todos.filter(todo => todo.id == id)
        todos.splice(todos.indexOf(temp[0]), 1) //remove from to do list

        temp[0].completed = true;
        
        console.log("temp[0]. "+ JSON.stringify(temp[0]))
        setCompleted([...completed, temp[0]]);
    };
    
    const handleDeleteTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleEditTodo = (id: number) => {
        console.log("edit "+id)
        //setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        let temp : TaskList;
        temp = todos.filter(todo => todo.id == id)[0]
        temp.edit = true
        console.log(JSON.stringify(temp))
    };
    
    return (
        <div className="container w-100 mb-4">
            <div className='card'>
                <div className='container text-center'>
                    <div className="d-flex align-items-center justify-content-center">
                        <h3 className='py-3 mx-2'>Todo App</h3>
                    </div>
                    
                </div>
                <div className='form-floating text-start border-primary'>
                    <AddTaskComponent inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos} id={id} setId={setId}/>
                </div>
                
                <div>
                    <h5> To Do List </h5>
                    {todos.map(todo => (
                        <TaskComponent key={todo.id} todo={todo} setTodos={setTodos} completeTodo={handleCompleteTodo} deleteTodo={handleDeleteTodo} editTodo={handleEditTodo} />
                    ))}
                </div>
                <div>
                    <h5> Completed </h5>
                    {completed.map(complete => (
                        <CompletedTaskComponent key={complete.id} todo={complete} completeTodo={handleCompleteTodo} deleteTodo={handleDeleteTodo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BoardComponent;