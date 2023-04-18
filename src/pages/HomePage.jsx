import React from 'react'
import './homepage.css'
import Navbar from '../components/navbar/Navbar'
import QuoteBody from '../components/quote/QuoteBody'
function HomePage() {
  return (
     <div className='homepage'>
        <Navbar/>
        <QuoteBody/>
    </div>
  )
}

export default HomePage