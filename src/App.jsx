// import React from 'react';
import "./App.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import {Route, Routes} from "react-router-dom";
// import { Link, NavLink, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/Homepage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';
//import ironhackersImg from "./assets/ironhackers.avif";


function App() {

  return(
  
  <div className="App">
  <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartments" element={<ApartmentsList />} />
          <Route path="/create" element={<CreateApartment />} />
          <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
        </Routes> 
        </div>
    );
  }
  

export default App;

