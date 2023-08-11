import practoReducer  from "../Feature/PractoSlice";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
   reducer:{
    userIcon : practoReducer
   }
})

export default store;