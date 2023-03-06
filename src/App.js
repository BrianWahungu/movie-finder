import AddMovie from './components/pages/AddMovie';
import EditMovie from './components/pages/EditMovie';
import Login from './components/pages/Login';
import Movies from './components/pages/Movies';
import MyMovies from './components/pages/MyMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import NavBar from './components/pages/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/addmovie" element={<AddMovie/>}/>
        <Route path="/editmovie" element={<EditMovie/>}/>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/mymovies" element={<MyMovies/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
