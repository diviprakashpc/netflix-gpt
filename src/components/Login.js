import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isUserWantSignIn, setIsUserWantSignIn] = useState(true);

  const handleSignUpClick = () => {
    setIsUserWantSignIn(!isUserWantSignIn);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isUserWantSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isUserWantSignIn && (
            <input
            type = "text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-700"
            />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <button className="p-4 m-4 bg-red-700 w-full rounded-lg">
          {isUserWantSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={handleSignUpClick}>
          {isUserWantSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
