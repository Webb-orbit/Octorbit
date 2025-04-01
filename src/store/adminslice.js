import { createSlice } from "@reduxjs/toolkit";

const init = {
    isadmin: false,
    userid: null,
    admindocid: null 
}

const Adminslice = createSlice({
    name: "admin",
    initialState: init,
    reducers:{
        storelogin(state, action){
            state.isadmin = true,
            state.userid = action.payload,
            state.admindocid = action.payload?.admindocid
        },
        storelogout(state){
            state.isadmin = false,
            state.userid = null,
            state.admindocid = null
        },
    }
})

export const {storelogin, storelogout} = Adminslice.actions
export default Adminslice.reducer
