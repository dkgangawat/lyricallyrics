import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SEARCH_TRACKS':
//       return {
//         ...state,
//         track_list: action.payload,
//         heading: 'Search Results'
//       };
//     default:
//       return state;
//   }
// };

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: ""
    // dispatch: action => this.setState(state => reducer(state, action))
  };

  const [state, setState] = useState(intialState);

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
	console.log(res.data);
  setState( {...state, track_list:res.data.response.chart_items,heading:"CHARTS..."})

}).catch(function (error) {
	console.error(error);
});
  }, []);
  return (
  <>
  
    {console.log(state)}
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    </>
  );
}
 