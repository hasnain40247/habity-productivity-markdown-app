import React, { useContext, useEffect, useRef, useState } from "react";
import "./Styles/markdown.css";
import { Context as MarkContext } from "../Context/MarkDownContext";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MDEditor from "@uiw/react-md-editor";

const MarkDownTextArea = ({ index }) => {
  const [markdown, setMark] = useState("");
  const { setMarkDown, setTitle } = useContext(MarkContext);
  const { state } = useContext(MarkContext);
  const codeEditor = useRef(null);
  const lineCounter = useRef(null);
  useEffect(() => {
    const ce = codeEditor.current;
    const lc = lineCounter.current;
    ce.addEventListener("scroll", () => {
      lc.scrollTop = ce.scrollTop;
      lc.scrollLeft = ce.scrollLeft;
    });
    ce.addEventListener("keydown", (e) => {
      console.log("keypressed:", e);
      let { keyCode } = e;
      let { value, selectionStart, selectionEnd } = ce;
      if (keyCode === 9) {
        // TAB = 9
        e.preventDefault();
        ce.value =
          value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);
        ce.setSelectionRange(selectionStart + 2, selectionStart + 2);
      }
    });

    var lineCountCache = 0;
    function line_counter() {
      var lineCount = ce.value.split("\n").length;
      var outarr = new Array();
      if (lineCountCache != lineCount) {
        for (var x = 0; x < lineCount; x++) {
          outarr[x] = x + 1 + ".";
        }
        lc.value = outarr.join("\n");
      }
      lineCountCache = lineCount;
    }
    ce.addEventListener("input", () => {
      line_counter();
    });
  }, []);

  return (
    <div className="markdown">
      <div className="header">
        <input
          className="titleArea"
          type={"text"}
          value={state[index].title}
          onChange={(change) => {
            setTitle(change.target.value, state[index].id);
          }}
        />
        <h3>
          <BiDotsVerticalRounded />
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          width: "98%",
          height: "100%",
          marginBottom:"5px",
          flexDirection: "row",
        }}
      >
        <textarea id="lineCounter" ref={lineCounter} wrap="off" >
          1.
        </textarea>
        <textarea id="codeEditor" ref={codeEditor} wrap="off"></textarea>
      </div>
    </div>
  );
};

export default MarkDownTextArea;
