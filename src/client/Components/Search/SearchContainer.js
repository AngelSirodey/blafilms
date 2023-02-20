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
          try {
            const data = await getMoviesByNameAndPage(searchByName, page)

            setMoviesData(data)
          } catch (err) {
            console.error(err)
          }
        }
        getMovies()

    }, [searchByName, page])

    const searchButton = (value) => {
      setSearchByName(value);
    }

    const changePage = (type) => {
      switch (type) {
        case 'increment':
          return page < 100 && setPage(page + 1)
        case 'decrement':
          return page > 1 && setPage(page - 1)
        default:
          setPage(1)
      }
    }

    return (
      <>
        <Search searchButton={searchButton} />
        {!moviesData ? (
          <p>No results yet</p>
        ) : (
          <MoviesList
          moviesData={moviesData}
          changePage={changePage}
          />
        )}
      </>
    )
}

export default SearchContainer;
