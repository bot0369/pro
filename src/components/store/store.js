import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player-slice"
import galleryListReducer from "./slice/galleryList-slice"


const store = configureStore({
    reducer: {
        player: playerReducer,
        galleryList: galleryListReducer,
    }
})

export default store;