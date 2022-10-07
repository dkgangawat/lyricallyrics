import React, { useContext,useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Context } from './context'
import axios from 'axios'

const Tracks=()=> {
    const [state,setState]= useContext(Context)
     let pageNumber_track =1
     useEffect(() => {
      const options = {
        method: 'GET',
        url: `https://${process.env.REACT_APP_X_R_HOST}/songs/chart`,
        params: {time_period: 'day', chart_genre: 'all', per_page: '10', page: '1'},
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_X_R_KEY}`,
          'X-RapidAPI-Host': `${process.env.REACT_APP_X_R_HOST}`
        }
      };
      
      axios.request(options).then(function (res) {
        setState( {...state, track_list:res.data.response.chart_items,heading:"CHARTS..."})
      
      }).catch(function (error) {
        console.error(error);
      });
        }, []);
     const addMore= async()=>{
        pageNumber_track += 1;
       
        const options = {
          method: 'GET',
          url: `https://${process.env.REACT_APP_X_R_HOST}/songs/chart`,
          params: {time_period: 'day', chart_genre: 'all', per_page: '10', page: `${pageNumber_track}`},
          headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_X_R_KEY}`,
            'X-RapidAPI-Host': `${process.env.REACT_APP_X_R_HOST}`
          }
        };
        
        axios.request(options).then(function (res) {
          setState( {...state,track_list:[...state.track_list , ...res.data.response.chart_items]})
          // state.track_list.push(res.data.response.chart_items)
        
        }).catch(function (error) {
          console.error(error);
        });
      
     }
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
        <button  className='btn' onClick={addMore}>Load more</button>
        </div>
    </div>
    </>
  )
}

export default Tracks