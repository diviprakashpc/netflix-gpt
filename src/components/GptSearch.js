import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'
import Header from './Header'

const GptSearch = () => {
  return (
    <div className=' h-full w-full gpt-search-container'>
        <div className='blood-background'>
        <Header/>
        <GptSearchBar/> 
        <GptMovieSuggestions/>
    </div>
    </div>
  )
}

export default GptSearch