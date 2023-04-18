import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router';

function Navbar() {

const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div>
        <span className='home' onClick={()=>{
          navigate('/')
        }}>Home</span>
        </div>
        <div>
            <span className='bookmarks' onClick={()=>{
              navigate('/bookmarks')
            }}>Bookmarks</span>
        </div>
    </div>
  )
}

export default Navbar