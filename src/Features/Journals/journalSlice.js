import { createSlice } from "@reduxjs/toolkit";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { v4 as uuid } from "uuid";
import { initialValue } from "../../Utilities/Helpers/InitialState";
import moment from "moment";

let initialJournalID = uuid();
let initialPageID = uuid();
let initialHabitID = uuid();
let initialStampID = uuid();

const DAYS = () => {
  const days = [];
  let dateStart = moment().subtract(1, "year");

  const dateEnd = moment();
  console.log(dateEnd.diff(dateStart, "days"));

  while (dateEnd.diff(dateStart, "days") >= 0) {
    days.push({
      id: uuid(),
      date: dateStart.format("YYYY-MM-DD"),

      total: 0,
      details: [],
    });
    dateStart.add(1, "days");
  }
  return days;
};

let initialMarkdown = [
  {
    type: "paragraph",
    children: [
      {
        text: "",
      },
    ],
  },
];

const initialState = {
  journals: [
    {
      journalId: initialJournalID,
      journalName: "Untitled",
      pages: [
        {
          pageId: initialPageID,
          pageName: "Untitled",
          pageMarkdown: initialMarkdown,
        },
      ],
      selectedPage: initialPageID,
    },
  ],
  habits: [
    {
      habitId: initialHabitID,
      habitName: "Task",
      stamps: DAYS(),
      selectedStamp: initialStampID,
    },
  ],
  selected: { type: "Journal", selectID: initialJournalID },
};

export const counterSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addJournal: (state) => {
      let JournalID = uuid();
      let PageID = uuid();

      let newJournal = {
        journalId: JournalID,
        journalName: "Untitled",
        pages: [
          {
            pageId: PageID,
            pageName: "Untitled",
            pageMarkdown: initialMarkdown,
          },
        ],
        selectedPage: PageID,
      };
      state.selected = { type: "Journal", selectID: JournalID };
      state.journals.push(newJournal);
    },
    deleteJournal: (state, action) => {
      state.journals = state.journals.filter(
        (e) => e.journalId != action.payload
      );

      if (state.selected.selectID === action.payload) {
        if (state.journals.length > 0)
          state.selected = {
            type: "Journal",
            selectID: state.journals[0].journalId,
          };
        else
          state.selected = {
            type: "Journal",
            selectID: null,
          };
      }
    },
    addPage: (state, action) => {
      let pageId = uuid();
      let newPage = {
        pageId: pageId,

        pageName: "Untitled",
        pageMarkdown: initialMarkdown,
      };

      state.journals.map((e) => {
        if (e.journalId === state.selected.selectID) {
          e.pages.push(newPage);
          e.selectedPage = pageId;
        }
      });
    },
    deletePage: (state, action) => {
      console.log(action.payload);
      state.journals.map((e) => {
        if (e.journalId === state.selected.selectID) {
          e.pages = e.pages.filter((i) => i.pageId != action.payload);
          console.log(e.pages);
          if (e.selectedPage === action.payload) {
            if (e.pages.length > 0) e.selectedPage = e.pages[0].pageId;
            else e.selectedPage = null;
          }
        }
      });
    },
    setJournal: (state, action) => {
      state.selected = { type: "Journal", selectID: action.payload };
    },
    setHabit: (state, action) => {
      console.log("hello");
      if (action.payload) {
        state.selected = {
          type: "Habit",
          selectID: action.payload,
        };
      } else {
        if (state.habits.length > 0)
          state.selected = {
            type: "Habit",
            selectID: state.habits[state.habits.length - 1].habitId,
          };
        else {
          state.selected = {
            type: "Habit",
            selectID: null,
          };
        }
      }
    },
    setPage: (state, action) => {
      state.journals.map((e) => {
        if (e.journalId === state.selected.selectID) {
          e.selectedPage = action.payload;
        }
      });
    },

    onChangeJournalTitle: (state, action) => {
      state.journals.map((e) => {
        if (e.journalId === state.selected.selectID) {
          e.journalName = action.payload;
        }
      });
    },
    onChangePageTitle: (state, action) => {
      state.journals.map((e) => {
        if (e.journalId === state.selected.selectID) {
          e.pages.map((i) => {
            if (i.pageId === e.selectedPage) {
              i.pageName = action.payload;
            }
          });
        }
      });
    },
    onChangePageContent: (state, action) => {
      state.journals.map((e) => {
        if (e.journalId === state.selected.selectID) {
          e.pages.map((i) => {
            if (i.pageId === e.selectedPage) {
              i.pageMarkdown = action.payload;
            }
          });
        }
      });
    },

    // Habit Slice Reducer
    addHabit: (state) => {
      let habit = uuid();

      let newHabit = {
        habitId: habit,
        habitName: "New Task",

        stamps: DAYS(),
        // selectedStamp: initialStampID,
      };

      state.habits.push(newHabit);

      state.selected = { type: "Habit", selectID: habit };
      console.log(state.selected);
    },
  },
});

export const {
  addJournal,
  deleteJournal,
  addPage,
  deletePage,
  setPage,
  setJournal,
  setHabit,
  onChangeJournalTitle,
  onChangePageTitle,
  onChangePageContent,

  // Habit Reducer Fuctions

  addHabit,
} = counterSlice.actions;

export default counterSlice.reducer;
