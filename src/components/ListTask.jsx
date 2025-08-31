import { useState} from "react";
import "../style.css";
import SearchItem from "./SearchItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faCheck} from '@fortawesome/free-solid-svg-icons'

function ListTask ({lists, setList}){

   const [vi,setVi] = useState('')
   const [search,setSearch] = useState('')
   const [idList,setIdList] = useState()


   const showed = lists.filter(itemm=>((itemm.toLowerCase().includes(search.toLowerCase()))))
  

    return( 
      <div>
           <SearchItem 
           search={search}
           setSearch={setSearch}
           />
          { lists.length? (
          <ul> {showed.map((el,i)=>{
            return (
            <li key={i}>
                {/* Edit button  here */}
                <input type="submit" className="edit btn" 
                  onClick={()=>{setVi(true);  setIdList(i); }} value="Edit"  />
                {/* If User Press the Edit Button    */}
                { (vi && idList===i)?  
                ( <>
                    <input className="list" type="text" value={el} 
                      onChange={(e)=>{(setList(lists.map( (num,index) =>(index===i ? e.target.value : num) ) )) } } 
                      onKeyDown={ (e)=>{if (e.key === "Enter"){setVi(false); setIdList();}}} /> 
                      
                    {/* Save the Edit  */}
                    <button className="save btn" 
                      onClick={()=>{setVi(false); setIdList()}}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                </> ) 

              //  The List Item Or if the User Dosen't Press the Edit button 
                  : (<span key={i}> {el} </span>) }
                
              {/* Delete Button  */}
            <button type="button" className="delete btn" 
                onClick={()=>{setList(lists.filter((_,x) => (x!==i)));}}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
        
            </li>)
          })}  
         </ul> ) 
         : <p className="empty"> list is empty</p> }
       </div>    
    
    );
}

export default ListTask;