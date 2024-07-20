import React from 'react'
import { IMG_CDN } from '../utils/constants'

const SearchResultCard = (props) => {
  const {name : movieName, posterPath} = props;
  return (
    <div>
        <div className='search-result-card'>
          <div className='movie-image'>
          <img alt='Movie Card'
            className= 'min-w-full min-h-full  rounded-t-lg'
            src={IMG_CDN+"/"+posterPath} 
          />
          </div>
          <div id='search-card-movie-text' className=' cursor-pointer text-center -top-12 transition-all duration-300 p-2 movie-title relative rounded-b-md -z-10 bg-black'>
            <span className=' text-center text-white font-semibold'>
              {movieName}
            </span>
          </div>
        </div>
    </div>
  )
}

export default SearchResultCard