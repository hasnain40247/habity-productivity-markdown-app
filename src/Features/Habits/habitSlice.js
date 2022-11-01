import { createSlice } from "@reduxjs/toolkit";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { v4 as uuid } from "uuid";
import { initialValue } from "../../Utilities/Helpers/InitialState";

let initialHabitID = uuid();
let initialStampID = uuid();

const initialState = {
  habits: [
    {
      habitId: initialHabitID,
      habitName: "Untitled",
      stamps: [{
        date: new Date("2021-03-25"),
        level:0
      }],
      selectedStamp: initialStampID,
    },
  ],
  selectedHabit: initialHabitID,
};

export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state) => {
      console.log(state);
      console.log("hello");
    },
  },
});

export const { addHabit } = habitSlice.actions;

export default habitSlice.reducer;
