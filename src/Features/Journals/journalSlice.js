import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

let initialJournalID = uuid();
let initialPageID = uuid();

const initialState = {
  journals: [
    {
      journalId: initialJournalID,
      journalName: "Untitled",
      pages: [
        {
          pageId: initialPageID,
          pageName: "Untitled",
        },
      ],
      selectedPage: initialPageID,
    },
  ],
  selectedJournal: initialJournalID,
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
          },
        ],
        selectedPage: PageID,
      };

      state.journals.push(newJournal);
    },
    addPage: (state, action) => {
      let newPage = {
        pageId: uuid(),
        pageName: "Untitled",
      };

      state.journals.map((e) => {
        if (e.journalId === state.selectedJournal) {
          e.pages.push(newPage);
        }
      });
    },
    setJournal: (state, action) => {
      state.selectedJournal = action.payload;
    },
    setPage: (state, action) => {
      state.journals.map((e) => {
        if (e.journalId === state.selectedJournal) {
          e.selectedPage = action.payload;
        }
      });
    },

    onChangeJournalTitle: (state, action) => {
      state.journals.map((e) => {
        if (e.journalId === state.selectedJournal) {
          e.journalName = action.payload;
        }
      });
    },
  },
});

export const {
  addJournal,
  addPage,
  setPage,
  setJournal,
  onChangeJournalTitle,
} = counterSlice.actions;

export default counterSlice.reducer;
