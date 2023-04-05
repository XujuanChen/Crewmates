import './App.css';
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCrewmate from './pages/CreateCrewmate';
import CrewmateGallery from './pages/CrewmateGallery';

function App() {
  return (
    <div className="page-container">
      <div>
        <Nav />
      </div>
      <div className='routes-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<CrewmateGallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
