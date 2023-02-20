import React from 'react';
import { ReactComponent as ChevronLeft } from '../../../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../../chevron-right.svg'
import MoviesList from './MoviesList';

import './MoviesList.css';

const MoviesListContainer = ({moviesData, nextPage, previousPage}) => {

  return (
    <div className="search-results">
      <div className="chevron">
        <ChevronLeft onClick={() => previousPage()} />
      </div>
      <div className="search-results-list">
        {moviesData?.Search.map(movie => (
          <MoviesList key={movie.imdbID} movie={movie}/>
        ))}
      </div>
      <div className="chevron">
        <ChevronRight onClick={() => nextPage()}/>
      </div>
    </div>
   )
}

export default MoviesListContainer;