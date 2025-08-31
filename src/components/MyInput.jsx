import { useState  } from "react";
import ListTask from "./ListTask";
import "../style.css";
import MyForm from "./MyForm";

function MyInput(){

const [task ,setTask] = useState ([]);

return (
 <div className="container">
 <h1 className="header">Hello to my TODO LIST</h1>
  <MyForm task={task} setTask={setTask}/>
   <ListTask lists={task}  setList={setTask}  />
 </div>
)
}

export default MyInput;