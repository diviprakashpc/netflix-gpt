import React from 'react'
import MovieCard from './MovieCard'
import useGetMoviesBasedOnCategory from '../hooks/useGetMoviesBasedOnCategory'
import { useSelector } from 'react-redux';

const MovieList = ({ title, id }) => {
  const [isLoading, isError] = useGetMoviesBasedOnCategory(id);
  const movies = useSelector((store) => store.movies.movieList[id])

  return (
    <div className='px-4 mt-4'>
    <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        isError && <h1>Error...</h1>
      }
       {movies && (
        <div className='flex gap-1 pt-2 pb-2'>
          {movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
        )}
    </div>
    </div>
  )
}

export default MovieList