import React from "react";
import "./Styles/markdown.css";
import SlateEditor from "./Slate";
import { FiTrash2 } from "react-icons/fi";
const Editor = ({ index }) => {
  return (
    
         
      <SlateEditor index={index} />
    
  );
};


export default Editor;
