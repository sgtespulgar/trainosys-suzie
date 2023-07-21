function CompletedTaskComponent(props : any){
    return(
        <div  className="todo">
            <span className={props.todo.completed ? 'completed' : ''}>{props.todo.taskName}</span>
        </div>
    )
}

export default CompletedTaskComponent;