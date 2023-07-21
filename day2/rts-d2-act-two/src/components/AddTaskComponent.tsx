import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { TaskList } from '../models/TaskListProps';

function AddTaskComponent(props : any){
    const { inputValue, setInputValue, todos, setTodos, id, setId } = props;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo: TaskList = {
                id: id,
                taskName: inputValue,
                completed: false,
                edit : false
            };
            setId(id + 1)
            setTodos([...todos, newTodo]);
            setInputValue('');  
        }
    };

    return(
        <div >
            <Form.Control type="text" className="input" value={inputValue} onChange={handleInputChange} />
            <Button variant="primary mb-3" onClick={handleAddTodo} > Add Task </Button>
           
        </div>
    )
}

export default AddTaskComponent;