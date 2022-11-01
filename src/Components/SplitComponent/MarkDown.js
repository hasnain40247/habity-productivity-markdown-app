import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/markdownStyles.css";
import EmptySection from "../MarkDownComponent/EmptySection";
import SlateEditor from "../MarkDownComponent/SlateEditor";

const MarkDown = () => {
  const selected = useSelector((state) => state.journal.selected);

  return (
    <div
      style={{
        flex: 1,
        boxSizing: "border-box",
        padding: "5% 10% 3px",
      }}
    >
      {selected.type === "Habit" ? <div><h5>Hello Habit {selected.selectID}</h5></div> : <SlateEditor />}
    </div>
  );
};
export default MarkDown;
