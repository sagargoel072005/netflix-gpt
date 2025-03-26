import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingmovies: [],
        Popularmovies:[],
        TopRatedmovies:[],
        Upcomingmovies:[],
    },
    reducers: {
        addNowPlayingmovies: (state, action) => {
            console.log("Payload in Redux Slice 1:", action.payload); 
            state.NowPlayingmovies = action.payload;
        },
        addPopularmovies: (state, action) => {
            console.log("Payload in Redux Slice 2:", action.payload); 
            state.Popularmovies = action.payload;
        },
        addTopRatedmovies: (state, action) => {
            console.log("Payload in Redux Slice 3:", action.payload); 
            state.TopRatedmovies = action.payload;
        },
        addUpcomingmovies: (state, action) => {
            console.log("Payload in Redux Slice 4:", action.payload); 
            state.Upcomingmovies = action.payload;
        },

        
    },
});
export const { addNowPlayingmovies } = moviesSlice.actions;
export const { addUpcomingmovies } = moviesSlice.actions;
export const { addTopRatedmovies} = moviesSlice.actions;
export const { addPopularmovies } = moviesSlice.actions;

export default moviesSlice.reducer;
