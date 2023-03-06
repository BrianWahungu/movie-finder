import React, { useState } from 'react';
import './index.css'

function AddMovieForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new movie object using the form data
    const newMovie = {
      title,
      description,
      category,
      imageUrl
    };

    // Send a POST request to the movies API endpoint to add the new movie to the list
    fetch('https://api.npoint.io/93283219ac06a89cfbee/movies/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })
      .then(response => response.json())
      .then(data => {
        // Clear the form fields
        setTitle('');
        setDescription('');
        setCategory('');
        setImageUrl('');

        // Call the handleAddMovie prop to update the movie list in the parent component
        props.handleAddMovie(data);
      });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={handleCategoryChange} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
      </label>
      <br />
      <button type="submit">Add Movie</button>
      <button type="button" onClick={props.handleBackClick}>Back</button>
    </form>
  );
}

export default AddMovieForm;
