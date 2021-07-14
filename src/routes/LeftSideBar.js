import React from 'react'
import { useHistory } from "react-router-dom";
import {useAuth} from '../App/AppContext'

export const LeftSideBar = () => {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <div style={{display: 'inline-block'}}>
            <SideBarComponent />
        </div>
        <div style={{display: 'inline-block', marginLeft: '40%'}}>
            Dashboard
            <AuthButton/>
        </div>
      </div>
    )
  }

  export const SideBarComponent = () => {
      return(
          <div style={{height: '700px', border: '1px solid black', padding: '10px'}}>
              <div>
                1st Route
              </div><hr/>
              <div>
                2nd Route
              </div><hr/>
              <div>
                3rd Route
              </div><hr/>
              <div>
                4th Route
              </div><hr/>
          </div>
      )
  }

function AuthButton() {
    let history = useHistory();
    let auth = useAuth();

    return auth.user ? (
        <p>
        Welcome!{" "}
        <button onClick={() => {auth.signout(() => history.push("/"))}}>
            Sign out
        </button>
        </p>
    ) : (
            <p>You are not logged in.</p>
    )
}