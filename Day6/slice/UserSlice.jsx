import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"case",
    initialState:{
        case:false
    },
    reducers:{
        caseSuccess: (state,action)=>{
            state.case = action.payload;
        },
         caseFailure: (state)=>{
            state.case = false;
         },
    }
})

export const {caseSuccess,caseFailure} = userSlice.actions;
const selectUser = (state)=>state.case.case;
export default userSlice.reducer;