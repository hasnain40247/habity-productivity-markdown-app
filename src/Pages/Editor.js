import React from "react";
import "./Styles/markdown.css";
import SlateEditor from "./Slate";
const Editor = ({ index }) => {
  return (
    <div className="Editor">
      <SlateEditor index={index} />
    </div>
  );
};


export default Editor;
