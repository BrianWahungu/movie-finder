import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditMovie = ({ match, history }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4567/api/movies/${match.params.id}`, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        });
        setTitle(response.data.title);
        setYear(response.data.year);
      } catch (error) {
        setErrorMessage('Unable to fetch movie details.');
      }
    };
    fetchData();
  }, [match.params.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.patch(
        `http://localhost:4567/api/movies/${match.params.id}`,
        {
          title: title,
          year: year
        },
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      );
      history.push('/my-movies');
    } catch (error) {
      setErrorMessage('Unable to update movie details.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4567/api/movies/${match.params.id}`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      history.push('/my-movies');
    } catch (error) {
      setErrorMessage('Unable to delete movie.');
    }
  };

  return (
    <div>
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Update Movie</button>
          <button type="button" onClick={handleDelete}>Delete Movie</button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default EditMovie;
