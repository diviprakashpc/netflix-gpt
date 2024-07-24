import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath, isShimmer}) => {
 
  let movieCardClass = `w-36 md:w-[11rem] md:h-[15.5rem] flex justify-center items-center overflow-hidden`
  // if(isShimmer)  movieCardClass = movieCardClass + ` shimmer-card`

  if(!posterPath) return null;
  return (
    <div className={movieCardClass}>
       {!isShimmer ? <img alt='Movie Card'
        className= 'transition-all duration-300 w-4/5 h-4/5 hover:cursor-pointer hover:w-[120%] hover:h-[120%] hover:overflow-hidden hover:z-999 hover:object-contain'
        src={IMG_CDN+posterPath} 
        /> : <div className='w-4/5 h-4/5 shimmer-card'></div>
      }
    </div>
  )
}

export default MovieCard