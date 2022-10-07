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
    heading: "",
    search_query :"",
    search_reault:[]
    // dispatch: action => this.setState(state => reducer(state, action))
    
  };

  const [state, setState] = useState(intialState);
  return (
  <>
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    </>
  );
}
 