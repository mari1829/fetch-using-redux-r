import { configureStore } from "@reduxjs/toolkit";
import  slice  from "./Slice";

export const store=configureStore({
   reducer:{
   data:slice
   }
})
// console.log(store.data); 
