export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.REACT_APP_TMDB_API,
  }
};

export const IMG_CDN ="https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  {identifier:"en" , name:"English"},
  {identifier:"hindi" , name:"Hindi"},
  {identifier:"spanish" , name:"Spanish"}];

export const API_KEY = process.env.REACT_APP_API_KEY;

export const USER_ICON = "https://occ-0-5244-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const NETFLIX_BACKGROUND = "https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg";