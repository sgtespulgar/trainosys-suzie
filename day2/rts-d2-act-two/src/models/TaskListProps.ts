export interface TaskList{
    id : number
    taskName : string
    completed : boolean
    edit : boolean
}

export interface TodoItemProps {
    todo: TaskList;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}
