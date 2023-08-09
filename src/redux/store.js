import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./events/events.slice";

export const store = configureStore({
  reducer: eventReducer,
});
