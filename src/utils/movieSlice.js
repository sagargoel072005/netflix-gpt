import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingmovies:null,

},
    reducers: {
    addNowPlayingmovies: (state, action) => {
state.addNowPlayingmovies=action.payload;
    },
},
});

export const {addNowPlayingmovies} = movieSlice.actions;
export default movieSlice.reducer;