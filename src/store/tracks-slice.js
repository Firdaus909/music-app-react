import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        selectedTracks: [],
        userPlaylist: []
    },
    reducers: {
        setTracks(state, action) {
            state.tracks = action.payload
        },
        setSelectedTracks(state, action) {
            state.selectedTracks = action.payload
        },
        setUserPlaylist(state,action) {
            state.userPlaylist = action.payload
        }
    }
})

export const tracksAction = trackSlice.actions

export default trackSlice.reducer