import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const Signup = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(""); // Reset error message
    if (email.current && password.current) {
      email.current.value = ""; // Clear input fields
      password.current.value = "";
    }
  };

  const handleButtonClick = () => {
    const error = checkValidData(email.current.value, password.current.value);

    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage(""); // Clear error message when valid

    }
    if (error) return;

    if (!isSignInForm) {

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid , email , displayName} = auth.currentUser; //auth is the new information and user is not updated value
            dispatch(addUser({uid:uid, email:email, displayName:displayName }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });

    }

  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src={NETFLIX_BACKGROUND}
          alt="Netflix Background"
          className="w-full h-full object-cover brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-black bg-opacity-70 p-10 rounded-lg shadow-2xl backdrop-blur-sm"
      >
        <h1 className="font-bold text-4xl mb-6 text-center text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-white"
          />
        )}

        <input
          type="text"
          placeholder="Email or phone number"
          ref={email}
          className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-white"
        />

        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-white"
        />

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        <button
          className="w-full bg-red-600 hover:bg-red-700 transition-all p-3 rounded font-bold text-lg"
          type="button"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="mr-2 accent-red-600" /> Remember Me
          </label>
          <a href="#" className="hover:underline">Need help?</a>
        </div>

        <p className="mt-6 text-center text-gray-400">
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          <span
            onClick={toggleSignInForm}
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            {isSignInForm ? "Sign Up now" : "Sign In"}
          </span>
        </p>

        <p className="mt-2 text-xs text-gray-500 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="#" className="text-blue-500 hover:underline"> Learn more</a>.
        </p>
      </form>
    </div>
  );
};

export default Signup;
