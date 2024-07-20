import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
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

  let headerStyle = "w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between"

  const location = window.location
  if(location.pathname=="/browse"){
    headerStyle = headerStyle + " absolute"
  }


  const handleGptSearchClick = () => {
    if(!showGptSearch) navigate("/gpt-search") 
    else navigate('/browse')
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
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
    <div className={headerStyle}>
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
