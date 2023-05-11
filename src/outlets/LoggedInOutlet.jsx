import React from 'react'
import { Navigate, Outlet,useLocation } from 'react-router-dom'
import {isLoggedIn} from "../utils/Common"

function LoggedInOutlet() {
    const location  = useLocation()
    // const isAllowed = isPathAllowed(location.pathname)
    if(location.pathname)
    if(isLoggedIn()){
        return <Outlet/>
    }else{
        return <Navigate to="/login"/>
    }
}

export default LoggedInOutlet