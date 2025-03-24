import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingmovies: [],
    },
    reducers: {
        addNowPlayingmovies: (state, action) => {
            console.log("Payload in Redux Slice:", action.payload); // ✅ Debugging: Check payload
            state.NowPlayingmovies = action.payload;
        },
    },
});
export const { addNowPlayingmovies } = moviesSlice.actions;
export default moviesSlice.reducer;
