import createDataContext from "./createDataContext";
import { v4 as uuidv4 } from "uuid";
import { withReact } from "slate-react";
import { createEditor } from "slate";
import { useState } from "react";

const markReducer = (state, action) => {
  switch (action.type) {
    case "markdown": {
      const index = state.findIndex((e) => e.id === action.payload.id);
      const newArray = [...state]; //making a new array
      newArray[index].markdown = action.payload.markdown; //changing value in the new array
      console.log("changes", newArray[index].markdown);

      return newArray;
    }

    case "title": {
      const index = state.findIndex((e) => e.id === action.payload.id);
      const newArray = [...state]; //making a new array
      newArray[index].title = action.payload.title; //changing value in the new array
      return newArray;
    }

    case "addPage":
      return [...state, action.payload];

    case "delete":
      return state.filter((e) => e.id != action.payload.id);
    default:
      return state;
  }
};

const setMarkDown = (dispatch) => {
  return async (changes, id) => {
    console.log("changes");
    console.log(changes);
    dispatch({ type: "markdown", payload: { id: id, markdown: changes } });
  };
};
const deletePage = (dispatch) => {
  return async (id) => {
    console.log("ID");
    console.log(id);
    dispatch({ type: "delete", payload: { id: id } });
  };
};

const setTitle = (dispatch) => {
  return async (title, id) => {
    console.log("TITITITITITI");
    console.log(title, id);
    dispatch({ type: "title", payload: { id: id, title: title } });
  };
};

const addPage = (dispatch) => {
  return async () => {
    const editor = () => withReact(createEditor());
    const id = uuidv4();

    let newPage = {
      id: id,
      editor: editor(),
      title: "Untitled",
      markdown: [
        {
          type: "paragraph",
          children: [{ text: "Start Writing!" }],
        },
      ],
    };
    dispatch({ type: "addPage", payload: newPage });
  };
};
export const { Context, Provider } = createDataContext(
  markReducer,
  { setMarkDown, addPage, setTitle, deletePage },
  []
);
