import React, { useContext } from 'react'
import { Context } from './context'
const printdata=(currEle)=>{
   
       if(currEle.track==undefined){
           return(
               <div className='card'>
               <h2>{currEle.artist.artist_name}</h2>
               </div>
               
           )
       }else{
           return(
               <div className='card'> 
                 <h3><strong>TRACK :</strong> {currEle.track.track_name}</h3><br/>
                 <p><strong> album :</strong> {currEle.track.album_name}</p>
               </div>
             
           )
       }
}
const Lyrics=()=> {
    const [state]= useContext(Context)
     console.log(state)
  return (
    <>
    <div className="lyrcontainer">
        {console.log(`now state is ${state}`)}
        {
         state.track_list.map((currEle)=>{
             return(
                 <>
                 {printdata(currEle)}
                 </>
             )
         })
        }
    </div>
    </>
  )
}

export default Lyrics