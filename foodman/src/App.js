import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { Username } from "./components/Context-api/userDetails";
import { useState } from "react";
import Items from "./components/Items";
import Cart from "./components/Cart";
import Signup from "./components/Signup";


import './App.css'
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [name, setName] = useState('');
  return (
    <>
      <Username.Provider value={{ name, setName }}>
        <BrowserRouter>

          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/items'} element={<Items />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/*'} element={<h1>Not available in Production</h1>} />
          </Routes>
        </BrowserRouter>
      </Username.Provider>
    </>
  );
}

export default App;
