import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath, isShimmer}) => {

  const [imageLoaded, setImageLoaded]  = React.useState(false);

  const onImageLoad = () => {
    console.log(posterPath)
    setImageLoaded(true)
  }
 
  let movieCardClass = `w-36 md:w-[11rem] md:h-[15.5rem] flex justify-center items-center overflow-hidden`
  // if(isShimmer)  movieCardClass = movieCardClass + ` shimmer-card`

  let imageClass =  imageLoaded ?`transition-all duration-300 w-4/5 h-4/5 hover:cursor-pointer hover:w-[120%] hover:h-[120%] hover:overflow-hidden hover:z-999 hover:object-contain` : 'w-4/5 h-4/5 shimmer-card'

  if(!posterPath) return null;
  return (
    <div className={movieCardClass}>
         <img alt='Movie Card'
        className= {imageClass}
        src={IMG_CDN+posterPath} 
        onLoad={onImageLoad}
        />
    </div>
  )
}

export default MovieCard