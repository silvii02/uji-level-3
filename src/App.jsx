import React from "react";
import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Home1Page from "./pages/Home1Page";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";

import DaftarPage from "./pages/DaftarPage";
import PaymentPage from "./pages/PaymentPage";


//header dan footer


function App(){
  return(
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={Home1Page} />
        <Route path="/LoginPage" Component={LoginPage} />
        <Route path="/MenuPage" Component={MenuPage} />
        <Route path="/PaymentPage" Component={PaymentPage} />
        <Route path="/Daftar" Component={DaftarPage} />
      </Routes>
    </div>
  );
  
}

export default App;