import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import CreateCrewmate from './pages/CreateCrewmate';
import CrewmateGallery from './pages/CrewmateGallery';
import EditCrews from './pages/EditCrews';

function App() {
  return (
    <div className="page-container">
      <Nav />
      <div className='routes-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={ <CreateCrewmate /> } />
          <Route path="/gallery" element={ <CrewmateGallery /> } />
          <Route path="/edit/:id" element={ <EditCrews /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
