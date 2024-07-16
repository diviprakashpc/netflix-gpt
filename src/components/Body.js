import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { modifyAppConfig } from "../utils/configSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // This is right now handled from frontend as there is no backend to send config.
    console.log("Body Rendered")
    const configs = {
      lang: "en",
      showProfilePicture: false,
      possibleMovieCategories: [
        {
          id: "now_playing",
          title: "Now Playing",
        },
        {
          id: "popular",
          title: "Popular",
        },
        {
          id: "top_rated",
          title: "Top Rated",
        },
      ],
    };

    dispatch(modifyAppConfig(configs));
  }, []); 

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsbscribe when component unmounts.
    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default Body;
