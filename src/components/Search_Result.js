import React ,{useContext} from 'react'
import { Context } from './context'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Search_Result = () => {
    const [state,setState]= useContext(Context)
    let  pageNumber_search =1
    const addMore=async ()=>{
            pageNumber_search +=1;
            const options = {
              method: 'GET',
              url: `https://${process.env.REACT_APP_X_R_HOST}/search`,
              params: {q: `${state.search_query}`, per_page: '10', page: `${pageNumber_search}`},
              headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_X_R_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_X_R_HOST}`
              }
            };
            
           await axios.request(options).then(function (response) {
              console.log(response.data);
              setState({...state, track_list:[...state.track_list,...response.data.response.hits]})
            }).catch(function (error) {
              console.error(error);
            });
    }
    const search_result =state.search_reault.map((currEle,index)=>{
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
        {search_result}
        <button  className='btn' onClick={addMore}>Load more</button>
        </div>
    </div>
    </>
  )
}

export default Search_Result