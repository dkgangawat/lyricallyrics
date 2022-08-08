import React, { useState,useEffect , createContext, useContext } from 'react'
import axios from 'axios'
import { Context } from './context'
import Artists from './artists'
 const Search = () => {
   const [userInput, setUserInput] = useState("")
   const [state,setState]= useContext(Context)
  //  const [finalInput, setFinalInput] = useState("")
   const [user,setuser] =useState([])
   const onChange= (e)=>{
     setUserInput(e.target.value)
   }
   const findArtist= async (e)=>{
     e.preventDefault()
     console.log(userInput)
    //  setFinalInput(userInput)
     axios
 .get(
   `chart.artists.get?page=1&page_size=3&country=${userInput}&apikey=${
     process.env.REACT_APP_MM_KEY
   }`
 )
 .then(res => {
  //  console.log(res.data);
  //  setuser(res.data.message.body.artist_list)
   setState({
    track_list:res.data.message.body.artist_list,
     heading :" atrist list"
  }
  )
 })
 .catch(err => console.log(err));
   }
  return (
    <>
    <form onSubmit={findArtist}>
          <input type="text" placeholder='Search' onChange={onChange}/>
          <button style={{display:'none'}} type='submit'>Search</button>
    </form>
    {/* {
       
       user.map((currEle)=>{
         if(user.length==0){
           return(
             <>
            <img src={spinner} alt="" />
             </>
           )
         }else{
           return(
         <div>
 
           <img src={currEle.avatar} alt=""  />
           <h1>{`${currEle.artist.artist_name} `}</h1>
           <email>{currEle.email}</email>
           </div>
         )
         }
         
       })
     } */}
    </>
  )
}

export default Search
