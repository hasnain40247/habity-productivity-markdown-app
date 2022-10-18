import React, { useContext, useEffect, useState } from "react";
import "../../Styles/markdownStyles.css";
import { Context as MarkContext } from "../../Context/MarkDownContext";
import EmptySection from "../MarkDownComponent/EmptySection";
import EditorSection from "../MarkDownComponent/EditorSection";

const MarkDown = ({ id }) => {
  const [markdown, setMark] = useState("");
  const { setMarkDown, setTitle } = useContext(MarkContext);
  const { state } = useContext(MarkContext);
  let index = state.findIndex((e) => e.id === id);


  console.log(state);

  if (id === 0) {
    return <EmptySection />;
  } else {

    return <EditorSection index={index} />;
  }
};
export default MarkDown;
