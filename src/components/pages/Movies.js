import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4567/api/movies', {
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

  const handleSearch = async (event) => {
    event.preventDefault();

