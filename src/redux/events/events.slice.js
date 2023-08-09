import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEvent,
  getAllEvents,
  getEvent,
  postEvent,
  putEvent,
} from "./events.operations";

const initialState = {
  events: [],
  searchValue: "",
  currentEvent: null,
  isLoading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,

  reducers: {
    searchEvents(state, { payload }) {
      state.searchValue = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
        state.currentEvent = null;
      })
      .addCase(getAllEvents.fulfilled, (state, { payload }) => {
        state.events = [
          ...payload.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)),
        ];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllEvents.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEvent.fulfilled, (state, { payload }) => {
        state.currentEvent = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(postEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postEvent.fulfilled, (state, { payload }) => {
        state.events.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(postEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(putEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putEvent.fulfilled, (state, { payload }) => {
        state.currentEvent = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(putEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentEvent = null;
        state.events = state.events.filter(({ id }) => id !== payload);
      })
      .addCase(deleteEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { searchEvents } = eventSlice.actions;

export const eventReducer = eventSlice.reducer;
