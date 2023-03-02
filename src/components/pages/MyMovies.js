import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyMovies = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4567/api/movies/my-movies', {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        });
        setMovies(response.data);
      } catch (error) {
        setErrorMessage('Unable to fetch movies.');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>My Movies</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>{movie.title}</div>
            <div>{movie.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyMovies;
