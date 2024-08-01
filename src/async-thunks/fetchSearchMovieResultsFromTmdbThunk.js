import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_OPTIONS } from "../utils/constants";

export const fetchSearchMovieResultsFromTmdb = createAsyncThunk('fetchSearchMovieResultsFromTmdb', async (datapack, {rejectWithValue}) => {
    const {gptMovies} = datapack
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
    try{
        const tmdbResults = await Promise.all(promiseArray)
        return {movieNames : gptMovies, movieResults : tmdbResults}
    }catch(error){
        rejectWithValue('Error Fetching Movies')
    }
})

const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)

    const json = await data.json();

    return json.results;

}