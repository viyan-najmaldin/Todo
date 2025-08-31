import { useRef } from "react";

const MyForm = ({task, setTask}) => {

const myInputRef= useRef();

  return (
   <form onSubmit={(e)=>{
    e.preventDefault();
//    console.log(e.target.task.value)
 let newtask = e.target.task.value;
 if(newtask)
   setTask([...task, newtask]);
     e.target.reset();
 }}>

 <input className="type" type="text" ref={myInputRef} name="task" placeholder="please write a task" />
 <input type="submit" onClick={()=> myInputRef.current.focus()} className="Add" value="Add" />

 </form>
  )
}

export default MyForm
