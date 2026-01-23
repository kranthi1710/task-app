import React,{useState} from "react";
import TaskList from "./TaskList";

const TaskInput = () => {
  const [tasks,setTasks]=useState<string[]>([]);
  const [task,setTask]=useState<string>("");

  const handleAddTask=(event:React.KeyboardEvent<HTMLButtonElement>)=>{
if(event.code==="Enter"){
  setTasks(tasks=>[...tasks,task])
  setTask("")
}
  }
  return (
    <>
    <input type="text" value={task} onChange={e=>setTask(e.target.value)}/>
    <button onClick={handleAddTask}>Add</button>
    <TaskList tasks={tasks} />
    </>
  )
};

export default TaskInput;