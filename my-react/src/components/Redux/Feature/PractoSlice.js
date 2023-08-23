import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showUserIcon: false,
};
const practoSlice = createSlice({
  name: "practo",
  initialState,
  reducers: {
    showingIcon: (state, action) => {
      state.showUserIcon = action.payload;
    },
  },
});

export const { showingIcon } = practoSlice.actions;
export default practoSlice.reducer;
