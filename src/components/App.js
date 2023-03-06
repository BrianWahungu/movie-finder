import React from 'react'
import Home from './Home'
import MovieCard from './MovieCard'
import Navbar from './Navbar'
import './index.css'
import Header from './Header'
// import Login from '../components/Login';


function App() {
  return (
    <div className='app'>
    
      {/* <Login /> */}
      <Header />
      <Navbar />
      <Home />
      <MovieCard />

    </div>
  )
}

export default App
