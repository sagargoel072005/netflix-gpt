import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
const user = useSelector((store)=> store.user)
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(()=>{

  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
    
    const { uid , email , displayName} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName }));
    navigate("/browse")
    
      } else {
        // User is signed out
        
    dispatch(removeUser());
    navigate('/')
    
      }
    });
    return () => unsubscribe();
    },[])


const handleGptSearchClick = () => {

}

  return (
    <div className="absolute w-screen flex px-8 py-2 bg-gradient-to-b from-black z-40 justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />

 {user && (    
   <div className="flex items-center gap-4">
   <button className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg"
   onClick={handleGptSearchClick}
   >
    GPT Search
   </button>
        <img
          className="w-12 h-12"
          src="https://occ-0-5244-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          alt="User Profile"
        />
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
          aria-label="Sign out from your account"
        >
          Sign Out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
