import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const showProfilePicture = useSelector(
    (store) => store.config.showProfilePicture
  );
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. onAuthStateChange will come into action.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // md means more than medium i.e. dekstop. sm is mode than small that is tablet. default is mobile.
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img src={LOGO} alt="logo" className="w-44 mx-auto md:mx-0 " />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg my-2"
          >
            {!showGptSearch ? "GPT Search" : "Homepage"}
          </button>
          {showProfilePicture && (
            <img
              className="hidden md:block w-12 h-12"
              alt="usericon"
              src={user && user.photoURL}
            />
          )}
          <button
            onClick={handleSignOut}
            className="py-2 px-4 m-2 bg-red-800 text-white rounded-lg my-2"
          >
            {"Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
