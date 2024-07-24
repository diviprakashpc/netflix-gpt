import React from 'react'

const VideoTitle = ({title, overview, isShimmer}) => {
  const [isLoading, setIsLoading] = React.useState(true)
   // This is created because: before api call happens showshimmer 
   //will be false and hence some ui will load with empty data. 
   //Once showShimmer becomes true we can change the isLoading to false and completely depend on state of showShimmer

  React.useEffect(() => {
    if(isShimmer) setIsLoading(false)
  }, [isShimmer])

  const className = `w-screen aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black`

  if(isLoading || isShimmer){
    return (
      <>
        <div className={`${className} shimmer-main-card`}></div>
      </>
    )
  }

  return (
    <>
    <div className={className}>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='md:inline-block py-6 text-lg w-1/4 hidden'>{overview}</p>
        <div className='my-4 md:my-0'>
            <button className='bg-opacity-50 rounded-lg bg-gray-500 text-white hover:bg-opacity-80 py-1 md:py-4 md:px-12 px-3 md:text-xl '>Play</button>
            <button className=' md:inline-block hidden text-xl bg-opacity-50 rounded-lg text-white px-12 mx-2 bg-gray-500 p-4 hover:bg-opacity-80'>More Info</button>
        </div>
    </div> 
    </>
  )
}

export default VideoTitle