import React,{useState} from "react";
import TaskList from "./TaskList";

const TaskInput = () => {
  const [tasks,setTasks]=useState<string[]>([]);
  const [task,setTask]=useState<string>("");

  const handleAddTask=()=>{
  setTasks(tasks=>[...tasks,task])
  setTask("")
  }

  return (
    <>
    <input type="text" value={task} 
    onChange={e=>setTask(e.target.value)}
    onKeyDown={e=>e.key==="Enter" && handleAddTask()}
    placeholder="Enter Task"/>
    <TaskList tasks={tasks} />
    </>
  )
};

export default TaskInput;