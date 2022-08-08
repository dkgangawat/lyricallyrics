import React, { useContext } from 'react'
import { Context } from './context'
const Artists = () => {
    const [state]= useContext(Context)

  return (
    <>
    <h1>{state.heading}</h1>
    {
        state.track_list.map((currEle)=>{
            return(
                <>
                <h1> {currEle}</h1>
                </>
            )
        })
    }
    </>
  )
}

export default Artists