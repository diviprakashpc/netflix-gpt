import React, { useRef } from 'react'
import { lang } from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'


const GptSearchBar = () => {
  
    const langKey  = useSelector((store) => store.config.lang)

    const dispatch = useDispatch();

    const searchText = useRef(null)

    const handleGptSearchClick = async () => {
        // Make an api call to gpt and get movie results

        // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + " . Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        // const result = await model.generateContent(gptQuery);
        // const response = await result.response
        // const gptResults = response.text()
        
        // if(!gptResults){
        //     // show some error 
        //     return;
        // }
    
        // const gptMovies = gptResults.split(",")
        
        const gptMovies = ['Koi Mil Gaya', '3 Idiots', 'Andaz apna apna', 'Hera Pheri']

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
        // We will get array of promises.
        const tmdbResults = await Promise.all(promiseArray)
        dispatch(addGptMovieResult({
            movieNames : gptMovies,
            movieResults : tmdbResults
        }))
    }

    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)

        const json = await data.json();

        return json.results;

    }



  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-1/2 bg-black grid grid-cols-12'>
            <input type='text'
             className='p-4 m-4 col-span-8'
             placeholder={lang[langKey].whatWouldYouLikeToWatchToday}
             ref={searchText}
            />
            <button 
            onClick={handleGptSearchClick}
            className='m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg'>
            {lang[langKey].search} 
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar