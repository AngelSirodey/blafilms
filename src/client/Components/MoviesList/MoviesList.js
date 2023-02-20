import React from 'react';
import placeholderImg from '../../../placeholder.png'

import './MoviesList.css';

const MoviesList = ({movie}) => {

  return (
    <div className="search-item">
      <img
        src={movie.Poster === 'N/A' ? placeholderImg : movie.Poster}
        alt="poster"
      />
      <div className="search-item-data">
        <div className="title">{movie.Title}</div>
        <div className="meta">{`${movie.Type} | ${movie.Year}`}</div>
      </div>
    </div>
  );
};

export default MoviesList;
