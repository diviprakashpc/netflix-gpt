import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useGetMoviesBasedOnCategory from "../hooks/useGetMoviesBasedOnCategory";

const Browse = () => {
 const [isNowPlayingMoviesLoading ,isNowPlayingMoviesError] =  useGetMoviesBasedOnCategory('now_playing') // First one is now playing
 const showShimmerInMainContainer = isNowPlayingMoviesLoading || isNowPlayingMoviesError
  return ( 
    <div>
      <Header /> 
      <MainContainer showShimmer = {showShimmerInMainContainer}/>
      <SecondaryContainer />
      )
    </div>
  );
};

export default Browse;
