import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterByContactsName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { filterByContactsName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
