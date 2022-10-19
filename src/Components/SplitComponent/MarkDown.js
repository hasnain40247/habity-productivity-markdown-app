import React, { useContext, useEffect, useState } from "react";
import "../../Styles/markdownStyles.css"
import { Context as MarkContext } from "../../Context/MarkDownContext";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MDEditor from "@uiw/react-md-editor";
import EmptySection from "../MarkDownComponent/EmptySection";

import ToolBar from "../MarkDownComponent/ToolBar";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import SlateEditor from "../../Pages/SlateEditor";

const MarkDown = ({ id }) => {
  const [markdown, setMark] = useState("");
  const { setMarkDown, setTitle } = useContext(MarkContext);
  const { state } = useContext(MarkContext);
  let index = state.findIndex((e) => e.id === id);

  // if (id === 0) {
  //   return <EmptySection />;
  // } else {
  //   return (
    
  //       <EditorSection index={index} />
      
  //   );
  // }

  return <SlateEditor index={index} />
};
export default MarkDown;
