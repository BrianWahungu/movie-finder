import React from 'react';
import './index.css';

function MovieCard(props) {
  const { title, category, year, description, image } = props;

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-card__image" />
      <div className="movie-card__content">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__category">{category}</p>
        <p className="movie-card__year">{year}</p>
        <p className="movie-card__description">{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
