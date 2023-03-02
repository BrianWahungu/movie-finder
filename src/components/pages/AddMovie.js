import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = ({ history }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        'http://localhost:4567/api/movies',
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
      setErrorMessage('Unable to add movie.');
    }
  };

  return (
    <div>
      <h1>Add Movie</h1>
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
          <button type="submit">Add Movie</button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddMovie;
