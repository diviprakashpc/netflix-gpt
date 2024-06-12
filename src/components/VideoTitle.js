import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='text-xl bg-opacity-50 rounded-lg text-white px-12 mx-2 hover:bg-opacity-80 bg-gray-500  p-4'>Play</button>
            <button className='text-xl bg-opacity-50 rounded-lg text-white px-12 mx-2 bg-gray-500  p-4 hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle