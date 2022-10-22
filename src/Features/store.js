import { configureStore } from '@reduxjs/toolkit'
import journalReducer from "./Journals/journalSlice"

export const store = configureStore({
  reducer: {
journal: journalReducer
  },
})