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

  const [crews, setCrews] = useState([]);

  useEffect(() => {
    // READ all post from table
    const fetchPosts = async () => {
      const { data } = await supabase
      .from("Crews")
      .select()
      .order("created_at", { ascending: false })

      // set state of posts
      setCrews(data)
    }

    fetchPosts();
  }, [])

  return (
    <div className="page-container">
      <div>
        <Nav />
      </div>
      <div className='routes-container'>
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
