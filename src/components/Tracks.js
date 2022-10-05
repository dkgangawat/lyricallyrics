import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from './context'
import axios from 'axios'

const Tracks=()=> {
    const [state]= useContext(Context)
     console.log(state)
    const trackList =state.track_list.map((currEle,index)=>{
        const {header_image_thumbnail_url,artist_names,full_title,id} = (state.heading==="CHARTS...")? currEle.item :currEle.result
        return(
            <div key={index} className="track">
                <img src={header_image_thumbnail_url} alt="" />
                <div className='trc-containet'>
                <p>{full_title}</p>
                <h3>{artist_names}</h3>
                <NavLink to={`/lyricallyrics/lyrics/${id}`}>view Lyrics</NavLink>
                </div>
            </div>
        )
    })
  return (
    <>
    <div className="home">
        <h1 style={{width:"100%"}}>{state.heading}</h1>
        <div className='tracksList'>
        {
      trackList
        }
        </div>
    </div>
    </>
  )
}

export default Tracks