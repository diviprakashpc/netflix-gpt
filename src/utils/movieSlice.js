import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        movieList : {}
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo  = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addCategoryMovies : (state, action) => {
            const olderList = state.movieList
            const { category, movieList } = action.payload
             state.movieList = {
                ...olderList,
                [category] : movieList
            }
        }
    }
})


export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addCategoryMovies } = movieSlice.actions


export default movieSlice.reducer