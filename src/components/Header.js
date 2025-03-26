import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const user = useSelector((store) => store.user)
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')

      }
    });
    return () => unsubscribe();
  }, [])


  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };


const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));

}


  return (
    <div className="fixed top-0 left-0 w-full px-8 py-3 bg-gradient-to-b from-black to-transparent z-50 flex items-center justify-between">
  
    <img className="w-36 cursor-pointer" src={LOGO} alt="Netflix Logo" />
  
    {user && (
      <div className="flex items-center gap-6">
        { showGptSearch &&
          <select className="px-4 py-2 border border-gray-500 text-white bg-transparent rounded-md cursor-pointer outline-none"
        onClick={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier} className="text-black">
              {lang.name}
            </option>
          ))}
        </select>
        }
      
        <button 
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
          onClick={handleGptSearchClick}
        >
        {showGptSearch ? "Homepage" : "GPT Search" }
        </button>
  
        
        <img
          className="w-10 h-10 rounded-md cursor-pointer"
          src="https://occ-0-5244-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          alt="User Profile"
        />
  
      
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
        >
          Sign Out
        </button>
      </div>
    )}
  </div>
  
  );
};

export default Header;
