import React from 'react'
import { useHistory } from "react-router-dom";

export const ForegtPage = () => {
  let history = useHistory()
  
  return (
    <div style={{width: '100%', height: '100%'}}>
        <div style={{margin: '10px'}}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input />
        </div>
        <div>
            Click The button to recive a mail and reset password there.
        </div>
        <div>
            <button onClick={() => history.push('/')}>To The Login</button>
        </div>
    </div>
  )
}