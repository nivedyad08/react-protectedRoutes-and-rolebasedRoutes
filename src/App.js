import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./components/Home";
import Users from "./components/Users";
import Settings from "./components/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Header from "./components/Header";
import Usage from "./components/Usage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route
          path="/login"
          element={
            <ProtectedRoutes>
              <Login />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Header />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Home />} />
          <Route path="usage" element={<Usage />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
