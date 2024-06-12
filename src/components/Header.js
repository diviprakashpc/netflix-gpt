import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();

  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({
                    uid : uid,
                    email : email,
                    displayName : displayName,
                    photoURL : photoURL
                }))
                navigate("/browse")
            }else{
                dispatch(removeUser());
                navigate("/")
            }
        })
        // Unsbscribe when component unmounts.
        return () => {
          unsubscribe();
        }
    }, [])




  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        // Sign-out successful. onAuthStateChange will come into action.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src={LOGO}
        alt="logo"
        className="w-44 "
      />
      <div className="flex p-2">
        {user && <img
          className="w-12 h-12"
          alt="usericon"
          src={user &&  user.photoURL}
        />}
       {user && <button onClick={handleSignOut} className="font-bold text-white">
          {"Sign Out"}
        </button>}
      </div>
    </div>
  );
};

export default Header;
