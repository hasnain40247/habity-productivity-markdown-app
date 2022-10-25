import { createSlice } from "@reduxjs/toolkit";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { v4 as uuid } from "uuid";
import { initialValue } from "../../Utilities/Helpers/InitialState";

let initialJournalID = uuid();
let initialPageID = uuid();
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
            pageMarkdown: initialMarkdown,
          },
        ],
        selectedPage: PageID,
      };
      state.selectedJournal = JournalID;
      state.journals.push(newJournal);
    },
    deleteJournal: (state, action) => {
      state.journals = state.journals.filter(
        (e) => e.journalId != action.payload
      );

      if (state.selectedJournal === action.payload) {
        if (state.journals.length > 0)
          state.selectedJournal = state.journals[0].journalId;
        else state.selectedJournal = null;
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
        if (e.journalId === state.selectedJournal) {
          e.pages.push(newPage);
          e.selectedPage = pageId;
        }
      });
    },
    deletePage: (state, action) => {
      console.log(action.payload);
      state.journals.map((e) => {
        if (e.journalId === state.selectedJournal) {
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
        if (e.journalId === state.selectedJournal) {
          e.pages.map((i) => {
            if (i.pageId === e.selectedPage) {
              i.pageMarkdown = action.payload;
            }
          });
        }
      });
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
  onChangeJournalTitle,
  onChangePageTitle,
  onChangePageContent,
} = counterSlice.actions;

export default counterSlice.reducer;
