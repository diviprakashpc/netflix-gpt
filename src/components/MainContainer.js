import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = ({showShimmer}) => {
    let movies = useSelector((store) => store.movies?.movieList['now_playing'])
    if(!movies) movies = [{original_title : '', overview : '', id : ''}]
    const mainMovie = movies[0]

    const {original_title, overview, id} = mainMovie

  
    return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle isShimmer={showShimmer} title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer