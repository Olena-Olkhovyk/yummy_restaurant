import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    selectedItem: null,
  },
  reducers: {
    setItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});
export const { setItem } = itemSlice.actions;
export const selectSelectedItems = (state) => state.items.selectedItem;
export default itemSlice.reducer;
