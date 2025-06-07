import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      toast.success("Contact successfully added!");
      return response.data;
    } catch (error) {
      const error404 = error.response?.data?.message || error.message;
      toast.error(`Failed to add: ${error404}`);
      return thunkAPI.rejectWithValue(error404);
    }
  }
);

// DELETE @ /contacts/:contactId
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success("Contact successfully deleted!");
      return response.data;
    } catch (error) {
      const error404 = error.response?.data?.message || error.message;
      toast.error(`Failed to delete: ${error404}`);
      return thunkAPI.rejectWithValue(error404);
    }
  }
);

// PATCH @ /contacts/:contactId
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success("Contact successfully edited!");
      return response.data;
    } catch (error) {
      const error404 = error.response?.data?.message || error.message;
      toast.error(`Failed to edit: ${error404}`);
      return thunkAPI.rejectWithValue(error404);
    }
  }
);
