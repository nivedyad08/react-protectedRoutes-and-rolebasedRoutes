import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LoggedInOutlet from "../outlets/LoggedInOutlet";
import {clearUserInfo} from "../utils/Common"
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <br/>
        <NavLink to="users">
          <span>Users</span>
        </NavLink>
        <br/>
        <NavLink to="/users/settings">
          <span>Settings</span>
        </NavLink>
        <br/>
        <NavLink to="usage">
          <span>Usage</span>
        </NavLink>
        <br/>
        <NavLink onClick={()=>clearUserInfo()}> 
          <span>Logout</span>
        </NavLink>
        <br/>
      </div>
      <div>
        <LoggedInOutlet/>
      </div>
    </div>
  );
}

export default Header;
