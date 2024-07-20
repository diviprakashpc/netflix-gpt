import React, { useRef, useState } from "react";
import Header from "./Header";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, DEFAULT_USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isUserWantSignIn, setIsUserWantSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState("")

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignUpClick = () => {
    setIsUserWantSignIn(!isUserWantSignIn);
  };

  const handleClick = () => {
    // validate the form data
    const msg = checkValidData(email.current.value, password.current.value)
    setErrorMessage(msg)

    //Perform Sign IN/UP
    if(msg) return;

    if(!isUserWantSignIn){
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL : DEFAULT_USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
                uid : uid,
                email : email,
                displayName : displayName,
                photoURL : photoURL
            }))
          }).catch((error) => {
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });

    }else{
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        //onAuthStateChange will handle the login now
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +" : "+errorMessage)
      });
    }

    

  }

  return (
    <>
    <div className="blood-background">
      <Header />
      <div className="w-full flex justify-center">
      <form className="md:w-3/12 p-12 bg-transparent text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isUserWantSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isUserWantSignIn && (
            <input
            ref={name}
            type = "text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-700"
            />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-md py-2">{errorMessage}</p>
        <button className="p-4 m-4 bg-red-700 w-full rounded-lg" onClick={(e)=>{e.preventDefault(); handleClick()}}>
          {isUserWantSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={handleSignUpClick}>
          {isUserWantSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
]     </div>
    </div>

    </>
  );
};

export default Login;
