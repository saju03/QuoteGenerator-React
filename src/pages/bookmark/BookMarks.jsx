import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import './bookmark.css'
function BookMarks() {
    const marks = useSelector(store=>store.bookmarks.items)
  
  return (

  <>  
    <Navbar/>
  <div className='bookmark'>
    {marks.map((e)=>{
        console.log(e);
return(
    <div className='card' key={e._id}>
        <div className='content'>
            {e.content}
        </div>
        <div className='author'>
            {e.authorSlug}
        </div>
    </div>
)
    })}
    

  </div>
    </>
  )
}

export default BookMarks