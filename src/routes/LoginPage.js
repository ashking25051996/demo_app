import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {useAuth} from '../App/AppContext'

export const LoginPage = () => {
  let history = useHistory();
  let dispatch = useDispatch()
  let auth = useAuth();
  const [formData, setFormData] = useState({email: '', password: ''})
 
  let login = () => {
    
    auth.signin(() => {
      history.push('/protected');
    })
  }

  return (
    <div style={{width: '100%', height: '100%'}}>
      <div style={{margin: '10px'}}>
        Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input onChange={(e) => setFormData({...formData, email: e.target.value})}/>
      </div>
      <div style={{margin: '10px'}}>
        Password:
        <input onChange={(e) => setFormData({...formData, password: e.target.value})}/>
      </div>
      <div style={{margin: '10px'}}>
        &nbsp;&nbsp;&nbsp;
        <button onClick={login}>Log in</button>
        <button onClick={() => history.push('/foregt')}>Forget Password</button>
      </div>
    </div>
  )
}