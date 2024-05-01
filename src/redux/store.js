import { configureStore } from "@reduxjs/toolkit";
import windowsReducer from "./windowsBool.js";


const store = configureStore({
    reducer: {

        windows: windowsReducer
        // Define a top-level state field named `counter`, handled by `counterReducer`
    },
});

export default store;