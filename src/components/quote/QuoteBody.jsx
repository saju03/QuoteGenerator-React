import React, { useEffect, useState } from 'react'
import './quotebody.css'
import axios from 'axios'
function QuoteBody() {
    const [quote,setQuote] = useState({})
    const [tags,setTags] = useState([])

    const fetchData = ()=>{
        try {
         axios.get('https://api.quotable.io/random').then(({data})=>{
            console.log(data);
            setQuote(data)

         })

         axios.get('https://api.quotable.io/tags').then(({data})=>{
            console.log(data);
            setTags(data)
         })
    
        } catch (error) {
            console.log(error);
        }
       
    }

    const searchTag = (e)=>{
        try {
     

        axios.get(`https://api.quotable.io/search/quotes?query=${e.target.value}`).then(({data})=>{
           console.log(data);
            if (data.count>0) {
              setQuote(data.results[0])
            }
        
        })
        } catch (error) {
            console.log(error);
        }
       

    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
        <div className='Body'>
            <div className='quote'>
                <div className='message'>
                    <span >{quote.content}</span>
                </div>

                <div className='atterbutes'>
                    <span>-{quote.authorSlug}</span>
                    <button className='addTobook'>+</button>
                </div>

            </div>
            
        </div>
        <div className='actions'>
            <div className='drop'>
                <select className='dropbox' name="slug" onChange={searchTag}>
                    <option></option>
                   {tags.map((e)=>{
                    return (<option key={e._id}>{e.slug}</option> )
                   })}
                </select>

            </div>

            <div className='next'>

            <button onClick={fetchData} className='nextBtn'>next</button>
            </div>

        </div>
        
        </>
    )
}

export default QuoteBody