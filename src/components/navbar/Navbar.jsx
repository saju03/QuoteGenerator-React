import React from 'react'
import './navbar.css'
function Navbar() {
    const hel=()=>{
console.log('sssss');
    }
  return (
    <div className='navbar'>
        <div>
        <span className='home' onClick={hel}>Home</span>
        </div>
        <div>
            <span className='bookmarks'>Bookmarks</span>
        </div>
    </div>
  )
}

export default Navbar