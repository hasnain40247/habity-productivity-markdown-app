import React from "react";
import "./Styles/markdown.css";
import SlateEditor from "./Slate";
import { FiTrash2 } from "react-icons/fi";
const Editor = ({ index }) => {
  return (
    <div className="Editor">
         
      <SlateEditor index={index} />
    </div>
  );
};


export default Editor;
