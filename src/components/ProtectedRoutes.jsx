import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {isPathAllowed} from "../utils/Common"

export default function ProtectedRoutes({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("value")
  );
  const location = useLocation();
  const isAllowed = isPathAllowed(location.pathname)
  return (
    <div>
      {!isAuthenticated && location.pathname === "/login" ? (
        children
      ) : isAuthenticated && location.pathname !== "/login" && isAllowed ? (
        children
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}
