import { configureStore } from "@reduxjs/toolkit";
import caseReducer from "./slice/UserSlice";

export default configureStore({
    reducer: {
        case: caseReducer
    }
})