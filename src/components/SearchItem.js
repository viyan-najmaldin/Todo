import React from 'react'
import '../style.css'

const SearchItem = ({search, setSearch}) => {
  return (
   <form onSubmit={(e)=>e.preventDefault()}>
    <input 
       className="search"
       type="text"
       placeholder="Search for your list"
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
    />
   </form>
  )
}

export default SearchItem
