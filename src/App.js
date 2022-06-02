import React, { useState } from "react";
import Header from "./components/Header";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export default function App() {
  const [page, setPage]= useState('Home');
  return (
    <div >
      <Header setPage={setPage}/>
      <Navigation setPage={setPage}/>
      <Portfolio page={page}/>
      <About page={page}/>
      <Home page={page}/>
      <Footer setPage={setPage}/>
    </div>
    
  );
}