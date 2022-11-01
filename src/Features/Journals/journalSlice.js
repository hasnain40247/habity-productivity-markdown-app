import { createSlice } from "@reduxjs/toolkit";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { v4 as uuid } from "uuid";
import { initialValue } from "../../Utilities/Helpers/InitialState";

let initialJournalID = uuid();
let initialPageID = uuid();
let initialHabitID = uuid();
let initialStampID = uuid();

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
      habitName: "Untitled",
      stamps: [
        {
          date: new Date("2021-03-25"),
          level: 0,
        },
      ],
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
      state.selected = { type: "Habit", selectID: null };
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
      console.log("hello");
      let habitID = uuid();

      let newHabit = {
        habitId: habitID,
        habitName: "Untitled2",
        stamps: [
          {
            date: new Date("2021-03-27"),
            level: 0,
          },
        ],
      };
      state.selected = { type: "Habit", selectID: habitID };
      state.habits.push(newHabit);
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
