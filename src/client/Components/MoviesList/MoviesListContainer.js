import React from 'react';
import { ReactComponent as ChevronLeft } from '../../../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../../chevron-right.svg'
import MoviesList from './MoviesList';

import './MoviesList.css';

const MoviesListContainer = ({moviesData, changePage}) => {

  return (
    <div className="search-results">
      <div className="chevron">
        <ChevronLeft onClick={() => changePage('decrement')} />
      </div>
      <div className="search-results-list">
        {moviesData?.Search.map(movie => (
          <MoviesList key={movie.imdbID} movie={movie}/>
        ))}
      </div>
      <div className="chevron">
        <ChevronRight onClick={() => changePage('increment')}/>
      </div>
    </div>
   )
}

export default MoviesListContainer;