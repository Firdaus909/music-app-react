import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user-slice'
import trackReducer from './tracks-slice'

const store = configureStore({
    reducer:{
        user:userReducer,
        tracks: trackReducer
    }
})

export default store