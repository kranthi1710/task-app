import React,{useState} from "react";
import TaskList from "./TaskList";

const TaskInput = () => {
  const [tasks,setTasks]=useState<string[]>([]);
  const [task,setTask]=useState<string>("");
  const handleTask=()=>{
if(event.code="Enter"){
  setTasks(tasks=>[...tasks,task])
  setTask("")
}
  }
  return (
    <>
    <input type="text" value={task} onChange={e=>setTask(e.target.value)}/>
    <button onClick={handleTask}>Add</button>
    <TaskList tasks={tasks} />
    </>
  )
};

export default TaskInput;