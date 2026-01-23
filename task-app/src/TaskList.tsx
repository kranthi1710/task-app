type TaskListProps={
    tasks:string[]
}

const TaskList=({tasks}:TaskListProps)=>{
return (
    <>
    {tasks.map((task,index)=><p key={index}>{task}</p>)}
    </>
)
};

export default TaskList;