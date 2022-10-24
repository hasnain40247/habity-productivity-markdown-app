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
      state.selectedJournal = JournalID;
      state.journals.push(newJournal);
    },
    addPage: (state, action) => {
      let pageId = uuid();
      let newPage = {
        pageId: pageId,
        pageName: "Untitled",
      };

      state.journals.map((e) => {
        if (e.journalId === state.selectedJournal) {
          e.pages.push(newPage);
          e.selectedPage = pageId;
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
    onChangePageTitle: (state, action) => {
      state.journals.map((e) => {
        if (e.journalId === state.selectedJournal) {
          e.pages.map((i)=>{
if(i.pageId===e.selectedPage){
  i.pageName=action.payload
}
          })
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
  onChangePageTitle
} = counterSlice.actions;

export default counterSlice.reducer;
