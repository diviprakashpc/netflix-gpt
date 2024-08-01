import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import SearchResultCard from "./SearchResultCard";
const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames, isMovieSearchResultsFetching, isMovieSearchResultsError } = gpt;

  if(isMovieSearchResultsFetching){
    return (
      <>
        <div className="w-full flex justify-center items-center">
          <div className="m-8 glowing-circle"></div>
        </div>
      </>
    )
  }

  return (
    <div className=" overflow-x-hidden w-full movie-suggestions text-white bg-opacity-70 p-4">
     {movieResults && movieResults.map((movieResult,index)=>{
      const movie = movieResult[0]; 
      return (
        <div key={movie.id} id={`item-${index}`}>
        <SearchResultCard name = {movie.title} posterPath = {movie['poster_path']}  />
      </div>
      )
    })}
    </div>
  );
};

export default GptMovieSuggestions;
