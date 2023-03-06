import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import AddMovieForm from './AddMovieForm';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('https://api.npoint.io/cc6c6f58e567831acc78')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFormShow = () => {
    setShowForm(true);
  }

  const handleFormClose = () => {
    setShowForm(false);
  }

  return (
    <div>
      <Navbar handleFormShow={handleFormShow} handleFormClose={handleFormClose} />
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} category={movie.category} description={movie.description} image={movie.image} />
        ))}
      </div>
      {showForm && <AddMovieForm />}
    </div>
  );
}

export default Home;
