import React from 'react'

const Header=({handleToggleDarkMode})=>{
    return(
      <div className='header'>
          <h1>MY NOTES</h1>
          <button 
          onClick={()=>
           handleToggleDarkMode(
               (previousDarkMode) => !(previousDarkMode) 
           )
           }
          className='save'>TOGGLE MODE</button>
      </div>
    )                
}

export default Header;