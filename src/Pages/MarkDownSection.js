import React, { useContext, useEffect, useState } from "react";
import "./Styles/markdown.css";
import { Context as MarkContext } from "../Context/MarkDownContext";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MDEditor from "@uiw/react-md-editor";
import MarkDownTextArea from "./MarkDownTextArea";

const MarkDownSection = ({ id }) => {
  const [markdown, setMark] = useState("");
  const { setMarkDown, setTitle } = useContext(MarkContext);
  const { state } = useContext(MarkContext);
  console.log(state);

  if (id === 0) {
    return (
      <div className="markdown empty">
        <h1>Create A Markdown Page!</h1>
      </div>
    );
  } else {
    let index = state.findIndex((e) => e.id === id);

    return <>
    
    <MarkDownTextArea index={index} />
    
    </>;
  }
};
export default MarkDownSection;
