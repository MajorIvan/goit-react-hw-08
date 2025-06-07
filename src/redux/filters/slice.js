import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "../contacts/operations";

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
  extraReducers: (builder) => {
    builder
      .addCase(addContact.fulfilled, (state) => {
        state.name = ""; // очищаємо фільтр після додавання
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.name = ""; // очищаємо фільтр після видалення
      });
  },
});
export const { filterByContactsName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
