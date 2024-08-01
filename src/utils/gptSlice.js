import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchMovieResultsFromTmdb } from "../async-thunks/fetchSearchMovieResultsFromTmdbThunk";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,
        isMovieSearchResultsFetching : true,
        isMovieSearchResultsError : false
    },
    reducers : {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult : (state, action) => {
            const {movieResults, movieNames} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchMovieResultsFromTmdb.fulfilled, (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            state.isMovieSearchResultsFetching = false;
        });
        builder.addCase(fetchSearchMovieResultsFromTmdb.pending, (state) => {
            state.isMovieSearchResultsFetching = true;
            state.isMovieSearchResultsError = false;
        });
        builder.addCase(fetchSearchMovieResultsFromTmdb.rejected, (state) => {
            state.isMovieSearchResultsFetching = false; // Set to false on error
            state.isMovieSearchResultsError = true;
        });
    }
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions

export default gptSlice.reducer