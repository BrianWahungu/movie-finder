import React, { useState } from "react";
import './index.css'

function Navbar(props) {
  const [showForm, setShowForm] = useState(false);

  function handleAddClick() {
    setShowForm(true);
  }

  function handleBackClick() {
    setShowForm(false);
  }

  return (
    <nav>
      {showForm ? (
        <div className="add-movie-form">
          <button onClick={handleBackClick}>Back</button>
          <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" />
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" />
            <label htmlFor="imageUrl">Image URL:</label>
            <input type="text" id="imageUrl" name="imageUrl" />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="navbar-buttons">
          <button onClick={handleAddClick}>Add</button>
          <button>Search</button>
          <button>Navigation</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
