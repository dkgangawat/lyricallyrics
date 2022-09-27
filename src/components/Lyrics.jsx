import axios from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'
const Lyrics = () => {
    const [value,setvalue]= useState("")
    const onChangevalue =(event)=>{
        setvalue(event.currentTarget.value)
    }
    const fetchData =async (event)=>{
        console.log(event.currentTarget.value);
        const responce = await axios.get(`track.search?q.track=${value}&apikey=1793a47598edb91bbc80c4015c1023e4`).catch((err)=>{
            console.log(err);
        })
        console.log(responce)
    }
    // useEffect(()=>{
    //     fetchData()
    // },[])
  return (
    <>
    <input onChange={onChangevalue} value={value}/>
    <button  onClick={fetchData}>Search</button>
    <h1>search results</h1>
    {
        
    }
    <div className='card'>
        
    </div>
    </>
  )
}

export default Lyrics