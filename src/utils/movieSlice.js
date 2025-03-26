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
            state.NowPlayingmovies = action.payload;
        },
        addPopularmovies: (state, action) => {
            state.Popularmovies = action.payload;
        },
        addTopRatedmovies: (state, action) => {
            state.TopRatedmovies = action.payload;
        },
        addUpcomingmovies: (state, action) => {
            state.Upcomingmovies = action.payload;
        },

        
    },
});
export const { addNowPlayingmovies } = moviesSlice.actions;
export const { addUpcomingmovies } = moviesSlice.actions;
export const { addTopRatedmovies} = moviesSlice.actions;
export const { addPopularmovies } = moviesSlice.actions;

export default moviesSlice.reducer;
