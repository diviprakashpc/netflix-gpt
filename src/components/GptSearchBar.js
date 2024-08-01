import React, { useRef } from 'react'
import { lang } from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchMovieResultsFromTmdb } from '../async-thunks/fetchSearchMovieResultsFromTmdbThunk'


const GptSearchBar = () => {
  
    const langKey  = useSelector((store) => store.config.lang)

    const dispatch = useDispatch();

    const searchText = useRef(null)

    const handleGptSearchClick = async () => {
        // Make an api call to gpt and get movie results

        // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + " . Give names of as much movies as possible with limit of 50 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        // const result = await model.generateContent(gptQuery);
        // const response = await result.response
        // const gptResults = response.text()
        
        // if(!gptResults){
        //     // show some error 
        //     return;
        // }
    
        // const gptMovies = gptResults.split(",")
        
        const gptMovies = ['Koi Mil Gaya', '3 Idiots', 'Andaz apna apna', 'Hera Pheri','Koi Mil Gaya', '3 Idiots', 'Andaz apna apna', 'Hera Pheri']

       const x = await dispatch(fetchSearchMovieResultsFromTmdb({gptMovies : gptMovies})).unwrap();
       console.log(x, "UNWRAPPED")
    }

  return (
    <div className=' p-4 flex justify-center w-full'>
        <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-1/2 grid grid-cols-12'>
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