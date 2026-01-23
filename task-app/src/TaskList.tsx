const TaskList=({tasks:[]})=>{
return (
    <>
    {tasks.map((task,index)=><p key={index}>{task}</p>)}
    </>
)
};

export default TaskList;