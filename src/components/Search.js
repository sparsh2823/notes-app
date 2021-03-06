import React from "react"
import {MdSearch} from "react-icons/md"

const Search=({handleSearchNote})=>{
    return(
        <div className='search'>
        <MdSearch className="search-icon" size='1.3em'/>
        <input type='text'
         onChange = {(event)=>handleSearchNote(event.target.value.toLocaleLowerCase())} 
         placeholder='type to search....'/>
        </div>
    )
}

export default Search;