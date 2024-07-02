import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { modifyAppConfig } from "../utils/configSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // This is right now handled from frontend as there is no backend to send config.
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

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
