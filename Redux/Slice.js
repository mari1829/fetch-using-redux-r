import { createSlice } from "@reduxjs/toolkit";

export let slice = createSlice({
  name: "data",

  initialState: {
    user: [1,2,3,4],
  },

  reducers: {
    useraction: (state, action) => {
      state.user = action.payload;

      console.log(action.payload);
      
    },
  },
});


export const { useraction } = slice.actions;
export default slice.reducer;
