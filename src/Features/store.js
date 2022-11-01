import { configureStore } from "@reduxjs/toolkit";
import journalReducer from "./Journals/journalSlice";
import habitReducer from "./Habits/habitSlice";

export const store = configureStore({
  reducer: {
    journal: journalReducer,
    habit: habitReducer,
  },
});
