import React from 'react'
import MovieCard from './MovieCard'
import useGetMoviesBasedOnCategory from '../hooks/useGetMoviesBasedOnCategory'
import { useSelector } from 'react-redux';
import { emptyMoviesForShimmer } from '../utils/constants';

const MovieList = ({ title, id }) => {
  const [isLoading, isError] = useGetMoviesBasedOnCategory(id);
  let movies = useSelector((store) => store.movies.movieList[id])
  const showShimmer = isLoading || isError 
  let moviesToRender = showShimmer ? emptyMoviesForShimmer : movies
  return (
    <div className='px-4 mt-4'>
    <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
    <div className={`flex ${!isLoading && "overflow-x-scroll"}`}>
    
       {moviesToRender && (
        <div className='flex gap-1 pt-2 pb-2'>
          {moviesToRender.map((movie, index) => <MovieCard key={movie.id.length > 0 ? movie.id : index} posterPath={movie.poster_path} isShimmer={showShimmer}/>)}
        </div>
        )}
        <MovieCard key={0} posterPath={' '} isShimmer={true}/>
    </div>
    </div>
  )
}

export default MovieList