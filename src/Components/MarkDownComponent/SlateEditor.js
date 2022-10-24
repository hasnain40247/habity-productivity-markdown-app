import React, { useCallback, useContext, useState } from "react";

import { Context } from "../../Context/MarkDownContext";
import { createEditor, Editor, Text, Transforms } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";

import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";

import ToolBar from "./ToolBar";
import Preview from "./Preview";
import EmptySection from "./EmptySection";
import { renderElement } from "../../Utilities/RenderFunctions/renderElement";
import { onKeyDown } from "../../Utilities/Helpers/OnKeyDown";
import { initialValue } from "../../Utilities/Helpers/InitialState";
import { renderDecorator } from "../../Utilities/RenderFunctions/renderDecorator";
import renderLeaf from "../../Utilities/RenderFunctions/renderLeaf";
import {
  addBlockStyleList,
  handleEnter,
} from "../../Utilities/Helpers/OnClickHandler";
import { useSelector } from "react-redux";

const SlateEditor = ({ index }) => {
  const journal = useSelector((state) => state.journal.selectedJournal);
  const pages = useSelector((state) =>
    state.journal.journals.filter((e) => e.journalId === journal)
  );
  const page = pages[0].pages.filter(
    (e) => e.pageId === pages[0].selectedPage
  )[0];
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(initialValue);
  const [toggle, setToggle] = useState(0);
  const handleToggle = () => setToggle(toggle === 0 ? 1 : 0);

  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
        padding: "5% 10% 3px",
        boxSizing: "border-box",
      }}
    >
      {1 > 0 ? (
        <Slate
          editor={editor}
          value={value}
          onChange={(change) => setValue(change)}
        >
          <ToolBar editor={editor} page={page} handleToggle={handleToggle} toggle={toggle} />
          {toggle === 0 ? (
            <Editable
              decorate={([node, path]) => renderDecorator([node, path, editor])}
              renderLeaf={renderLeaf}
              renderElement={renderElement}
              placeholder="Write some markdown..."
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  event.preventDefault();
                  handleEnter("list-item", editor);
                }
              }}
              className="richEditor markfont"
            />
          ) : (
            <Preview index={index} value={value} />
          )}
        </Slate>
      ) : (
        <EmptySection />
      )}
    </div>

    // {toggle === 0 ? (
    //   <Editable
    //     // onDOMBeforeInput={handleDOMBeforeInput}
    //     decorate={([node, path]) => renderDecorator([node, path, editor])}
    //     renderLeaf={renderLeaf}
    //     renderElement={renderElement}
    //     placeholder="Write some markdown..."
    //     onKeyDown={(event) => {
    //       if (event.code === "Enter") {
    //         event.preventDefault();
    //         handleEnter("list-item", editor);
    //       }
    //     }}
    //     className="richEditor markfont"
    //   />
    // ) : (
    //   <Preview index={index} value={value} />
    // )}

    // <Slate
    //   editor={pageState[index].editor}
    //   key={pageState[index].id}
    //   value={pageState[index].markdown}
    //   onChange={(changes) => setMarkDown(changes, pageState[index].id)}
    // >
    //   <ToolBar index={index} pageState={pageState} />
    //   {/* <Editable
    //     className="richEditor markfont"
    //     decorate={decorate}

    //     // onKeyDown={(event) => {
    //     //   console.log(event);
    //     //   if (!event.ctrlKey) {
    //     //     return;
    //     //   }
    //     //   switch (event.key) {
    //     //     case "`": {
    //     //       event.preventDefault();
    //     //       CustomEditor.toggleCodeBlock(pageState[index].editor);
    //     //       break;
    //     //     }
    //     //     case "b": {
    //     //       event.preventDefault();
    //     //       CustomEditor.toggleBoldMark(pageState[index].editor);
    //     //       break;
    //     //     }
    //     //   }
    //     // }}
    //   /> */}
    // </Slate>
  );
};
export default SlateEditor;

{
  /* <Editable
className="richEditor markfont"
decorate={decorate}
renderLeaf={renderLeaf}
renderElement={renderElement}
onKeyDown={(event) => {
  console.log(event);
  if (!event.ctrlKey) {
    return;
  }
  switch (event.key) {
    case "`": {
      event.preventDefault();
      CustomEditor.toggleCodeBlock(pageState[index].editor);
      break;
    }
    case "b": {
      event.preventDefault();
      CustomEditor.toggleBoldMark(pageState[index].editor);
      break;
    }
  }
}}
/> */
}

{
  /* 
      {click ? (
        <div
          style={{
            backgroundColor: "#fffbf1",
            position: "absolute",
            right: "0.5%",
            top: "8.5%",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            onClick={() => deletePage(pageState[index].id)}
            style={{
              cursor: "pointer",

              display: "flex",
              flexDirection: "row",
              color: "#272822",
              verticalAlign: "bottom",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.7rem",
              fontWeight: "bold",
              width: "90px",
              padding: "2px 20px",
            }}
          >
            <p>
              {" "}
              <FiTrash2 />
            </p>
            <p>Delete Page</p>
          </div>
        </div>
      ) : null} */
}
