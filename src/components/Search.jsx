import React, { useState,useEffect , createContext, useContext } from 'react'
import axios from 'axios'
import { Context } from './context'
import Artists from './artists'
import "./search.css"
import { useNavigate } from 'react-router-dom'
 const Search = () => {
  const Navigate = useNavigate()
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
    Navigate("/lyricallyrics")
    const options = {
      method: 'GET',
      url: `https://${process.env.REACT_APP_X_R_HOST}/search`,
      params: {q: `${userInput}`, per_page: '10', page: '1'},
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_X_R_KEY}`,
        'X-RapidAPI-Host': `${process.env.REACT_APP_X_R_HOST}`
      }
    };
    
   await axios.request(options).then(function (response) {
      console.log(response.data);
      setState({track_list:response.data.response.hits,heading:`search reasult for ${userInput}`})
      setUserInput("")
    }).catch(function (error) {
      console.error(error);
    });
   }
  return (
    <>
    <form onSubmit={findArtist}>
      <div className='search'>
          <input type="text" placeholder='Search' id='search-input' value={userInput} onChange={onChange}/>
          <button  type='submit'><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
         </button>
         
         </div>
    </form>
    </>
  )
}

export default Search
