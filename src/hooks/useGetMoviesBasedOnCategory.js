import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useGetMoviesBasedOnCategory = (category) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movieList[category])

  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  
  const getMoviesBasedOnCategory = async () => {
    setIsLoading(true)
    try{
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?page=1`,
      API_OPTIONS
    )
    const json = await data.json(); // converting into readable stream
    dispatch(addCategoryMovies({
      category : category,
      movieList : json.results
    }));
  }
  catch(e){
    setIsError(true)
  }finally{
    setIsLoading(false)
  }
  };

  useEffect(() => {
    !movies && getMoviesBasedOnCategory();
  }, []);

  return [isLoading, isError]
};

export default useGetMoviesBasedOnCategory;