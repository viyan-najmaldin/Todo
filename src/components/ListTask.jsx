import { useState } from "react";
import "../style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faCheck} from '@fortawesome/free-solid-svg-icons'

function ListTask ({lists, setList}){

   const [vi,setVi] = useState('')
   const [idList,setIdList] = useState()

    return( <div>
        <ul> {lists.map((el,i)=>{
    return <li key={i}>
         <button type="button" className="edit btn" onClick={()=>{setVi(true); setIdList(i)}}>Edit</button>
    {  (vi && idList===i)?  
    ( <><input className="list" type="text" value={el} onChange={(e)=>{(setList(lists.map( (num,index) =>(index===i ? e.target.value : num) ) )) } }/> 
      <button className="save btn" onClick={()=>{setVi(false); setIdList()}}><FontAwesomeIcon icon={faCheck} /></button></> ) 
    : (<span key={i}> {el} </span>) }
       
    <button type="button" className="delete btn" onClick={()=>{setList(lists.filter((_,x) => (x!==i)));}}><FontAwesomeIcon icon={faTrash} /></button>
</li>
             
        })}  
       </ul>  


       
    </div>
        
    );

}

export default ListTask;