import { configureStore } from "@reduxjs/toolkit";
import adminslice from "./adminslice";

export const store = configureStore({
    reducer:{
        admin: adminslice
    }
})