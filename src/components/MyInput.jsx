import { useState } from "react";
import ListTask from "./ListTask";
import "../style.css";
function MyInput(){

const [task ,setTask] = useState ([])

return (
 <div className="container">
 <h1 className="header">Hello to my TODO LIST</h1>
 <form onSubmit={(e)=>{
    e.preventDefault();
//    console.log(e.target.task.value)
 let newtask = e.target.task.value;
 if(newtask)
   setTask([...task, newtask]);
     e.target.reset();
 }}>

 <input className="type" type="text" name="task" placeholder="please write a task" />
 <input type="submit" className="Add" value="Add" />

 </form>
   <ListTask lists={task}  setList={setTask}  />
 </div>
)
}

export default MyInput;