import React from 'react'
import { useHistory } from "react-router-dom";
import {useAuth} from '../App/AppContext'
import { LeftSideBar } from './LeftSideBar';
  
export const Dashboard = () => {
return (
    <h3>
        <LeftSideBar />
    </h3>
)
}
