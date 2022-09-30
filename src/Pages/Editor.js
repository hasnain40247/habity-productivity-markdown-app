import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./Styles/markdown.css";
import { Editable, Slate, withReact } from "slate-react";
import {VscBold, VscItalic} from "react-icons/vsc"

import { createEditor } from "slate";
import useEditorConfig from "./RenderElement";
import Toolbar from "./Toolbar";
const Editor = ({index}) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement, renderLeaf } = useEditorConfig(editor);
  const lineCounter = useRef(null);

  const [state, setState] = useState([
    {
      type: "paragraph",
      children: [
        { text: "Hello World! This is my paragraph inside a sample document." },
        { text: "Bold text.", bold: true, code: true },
        { text: "Italic text.", italic: true },
        { text: "Bold and underlined text.", bold: true, underline: true },
        { text: "variableFoo", code: true },
      ],
    },
    {
      type: "paragraph",
      children: [
        { text: "Hello World! This is my paragraph inside a sample document." },
      ],
    },
    {
      type: "h1",
      children: [{ text: "Heading 1" }],
    },
    {
      type: "h2",
      children: [{ text: "Heading 2" }],
    },
  ]);
  console.log(state);
  return (
    <div className="Editor">
     <Toolbar index={index}/>
    
    <Slate editor={editor} value={state} onChange={setState}>
          <Editable
          className="richEditor"
            wrap="off"
            renderLeaf={renderLeaf}
            renderElement={renderElement}
          />
        </Slate>
    
    </div>
  );
};

// const Editor = () => {
//   const codeEditor = useRef(null);
//   const lineCounter = useRef(null);
//   const [value,setValue]=useState("")

//   useEffect(() => {
//     const ce = codeEditor.current;
//     const lc = lineCounter.current;

//     ce.addEventListener("scroll", () => {
//       lc.scrollTop = ce.scrollTop;
//       lc.scrollLeft = ce.scrollLeft;
//     });
//     ce.addEventListener("keydown", (e) => {
//       let { keyCode } = e;
//       let { value, selectionStart, selectionEnd } = ce;
//       if (keyCode === 9) {
//         // TAB = 9
//         e.preventDefault();
//         ce.value =
//           value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);
//         ce.setSelectionRange(selectionStart + 2, selectionStart + 2);
//       }
//     });

//     var lineCountCache = 0;
//     function line_counter() {
//       var lineCount = ce.value.split("\n").length;
//       var outarr = new Array();
//       if (lineCountCache != lineCount) {
//         for (var x = 0; x < lineCount; x++) {
//           outarr[x] = x + 1 + ".";
//         }
//         lc.value = outarr.join("\n");
//       }
//       lineCountCache = lineCount;
//     }
//     ce.addEventListener("input", () => {
//       line_counter();
//     });
//   }, []);

//   return (
//     <div className="Editor">
//       <div className="toolBar">
//         <a id="bold">
//           <VscBold />
//         </a>
//         <a id="italic">
//           <VscItalic />
//         </a>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           width: "100%",
//           height: "100%",
//           marginBottom: "5px",
//           flexDirection: "row",
//         }}
//       >
//         <textarea id="lineCounter" ref={lineCounter} wrap="off">
//           1.
//         </textarea>
//         <textarea id="codeEditor" ref={codeEditor} wrap="off"></textarea>

//       </div>
//     </div>
//   );
// };
export default Editor;
