import React, { useState, useEffect } from 'react';

import Search from './Search';
import MoviesList from '../MoviesList';
import {getMoviesByNameAndPage} from '../../../server';

const SearchContainer = () => {
    const [moviesData, setMoviesData] = useState()
    const [searchByName, setSearchByName] = useState('king')
    const [page, setPage] = useState(1);

    useEffect(() => {
      const getMovies = async () => {
        const data = await getMoviesByNameAndPage(searchByName, page)
  
        setMoviesData(data)
      }
      getMovies()
    }, [searchByName, page])

    const searchButton = (value) => {
      setSearchByName(value);
    }
    
    const nextPage = () => {
      page < 100 && setPage(page + 1);
    }

    const previousPage = () => {
      page > 1 && setPage(page - 1)
    }

    return (
      <>
        <Search searchButton={searchButton} />
        {!moviesData ? (
          <p>No results yet</p>
        ) : (
          <MoviesList
          moviesData={moviesData}
          nextPage={nextPage}
          previousPage={previousPage}
          />
        )}
      </>
    )
}

export default SearchContainer;
