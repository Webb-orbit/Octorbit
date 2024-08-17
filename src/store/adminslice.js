import { createSlice } from "@reduxjs/toolkit";

const init = {
    isadmin: false,
    userid: null
}

const Adminslice = createSlice({
    name: "admin",
    initialState: init,
    reducers:{
        storelogin(state, action){
            state.isadmin = true,
            state.userid = action.payload
        },
        storelogout(state){
            state.isadmin = false,
            state.userid = null
        },
    }
})

export const {storelogin, storelogout} = Adminslice.actions
export default Adminslice.reducer