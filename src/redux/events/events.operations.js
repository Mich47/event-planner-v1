import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64d0c012ff953154bb79672d.mockapi.io";

export const getAllEvents = createAsyncThunk(
  "events/getAllEvents",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/events");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getEvent = createAsyncThunk(
  "events/getEventById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/events/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postEvent = createAsyncThunk(
  "events/addEvent",
  async (newEvent, thunkAPI) => {
    try {
      const { data } = await axios.post(`/events`, newEvent);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const putEvent = createAsyncThunk(
  "events/updateEventById",
  async (updatedEvent, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `/events/${updatedEvent.id}`,
        updatedEvent
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/events/${id}`);
      if (response.status === 200) {
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
