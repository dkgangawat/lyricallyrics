import React from 'react'
import "./lyrics.css"
import {useParams} from 'react-router-dom'
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Context } from './context';
const DisplayLyrics = () => {
  const {id} = useParams();
    const [song,setSong] = useState({})
    const [media,setMedia]=useState("")
    const [ytEmbLink,setYtEmbLink] =useState("")
    const fatchData = async ()=>{
      const options = {
        method: 'GET',
        url: `https://${process.env.REACT_APP_X_R_HOST}/songs/${id}/lyrics`,
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_X_R_KEY}`,
          'X-RapidAPI-Host': `${process.env.REACT_APP_X_R_HOST}`
        }
      };
      
     await axios.request(options).then(function (res) {
        console.log(res.data);
        const constiner = document.getElementById("lyrics")
        // console.log(res.data.response.lyrics.lyrics.body.dom);
        const ly = res.data.response.lyrics.lyrics.body.plain.replace(/(\n)/g,`<br/>`)
        constiner.innerHTML = ly;
      }).catch(function (error) {
        console.error(error);
      });

const options2 = {
  method: 'GET',
  url: `https://${process.env.REACT_APP_X_R_HOST}/songs/${id}`,
  params: {text_format: 'dom'},
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_X_R_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_X_R_HOST}`
  }
};
 // console.log(res.data);
  
const res = await axios.request(options2).catch(function (error) {
	console.error(error);
});
setSong(res.data.response.song)

    }
    useEffect(()=>{
        fatchData()  
    },[])
    useEffect(()=>{
      if(song.media!=undefined){
        console.log("working");
      song.media.map(curr=>{
        if(curr.provider=="youtube")
        setMedia(curr.url.replace("watch?v=","embed/").replace("http","https"))
      })}
    },[song])
  

  return (
    <>
    <div className='lyrics-header'>
      <div className='container'>
        <img src={song.header_image_url} alt="song_art_image_url" />
      <h1>{song.full_title}</h1>
      </div>
    </div>
    <div className='lyrcontainer'>
      {/* <h1>{track.item.full_title}</h1> */}
      <p id='lyrics'></p>
    <iframe className='youtube'src={media}>
     </iframe>
    </div>
    </>
  )
}

export default DisplayLyrics