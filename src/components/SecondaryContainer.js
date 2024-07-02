import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieCategories = useSelector((store) => store.config.possibleMovieCategories)
  return (
    <div>
        <div className="bg-black">
          <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20"> 
          {/* moving this child up because it does not have a black background color */}
            {movieCategories && movieCategories.map((category) => {
              return (
                <>
                  <MovieList id={category.id} title={category.title}/>
                </>
              )
            })}
          </div>
        </div>

    </div>
  );
};

export default SecondaryContainer;
