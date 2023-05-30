import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import { Link, BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Principal from "./Principal";
import Favoritos from "./components/Favoritos/Favoritos";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import useToken from './useToken';


export default function App() {
  const { token, setToken } = useToken();
  
  if(window.location.pathname === "/cadastro") {
    return <Cadastro />
  }

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/favoritos" element={<Favoritos token = {token} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/preferences" element={<Preferences />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}