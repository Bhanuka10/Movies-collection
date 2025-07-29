import './App.css';
import Home from "./Pages/Home.jsx";
import Favorite from "./Pages/Favorite.jsx";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar.jsx';


function App() {
  
  return (
  <div>
    <Navbar />
    <main className="main-container">
     
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Favorite />} path="/favorite" />
      </Routes>
    </main>
    </div>
  );
}

export default App;

