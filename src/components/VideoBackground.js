import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
 const playerVars = {
  'autoplay': 1,
  'controls': 0,
  'disablekb': 1,
  'fs': 0,
  'loop': 1,
  'modestbranding': 1,
  'rel': 0,
  'showinfo': 0,
  'mute': 1,
  'autohide': 1
 }
 const queryString = Object.keys(playerVars).map(key => `${key}=${playerVars[key]}`).join('&');

 useMovieTrailer(movieId)
  return (
    <div className="">
      <iframe
       className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&`+queryString}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; controls=0 "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
