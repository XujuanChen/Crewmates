import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from "./components/Nav";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCrewmate from './pages/CreateCrewmate';
import CrewmateGallery from './pages/CrewmateGallery';
import EditCrews from './pages/EditCrews';
import { supabase } from './client'

function App() {
  const [fetchError, setFetchError] = useState(null)
  const [crews, setCrews] = useState(null);

  useEffect(() => {
    // READ all post from table
    const fetchCrews = async() => {
      const { data, error } = await supabase
      .from("Crews")
      .select()
      .order("created_at", { ascending: true })

      if (error) {
        setFetchError('Could not fetch the smoothies!')
        setCrews(null);
      }

      if (data) {
        setCrews(data);
        setFetchError(null);
      }
    }

    fetchCrews();
  }, [])

  return (
    <div className="page-container">
      <div>
        <Nav />
      </div>

      <div className='routes-container'>
        {fetchError}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={ <CreateCrewmate /> } />
          <Route path="/gallery" element={ <CrewmateGallery data={crews} /> } />
          <Route path="/edit/:id" element={ <EditCrews data={crews} /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
