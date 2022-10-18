import React, { useCallback, useContext, useState } from "react";

import { Context } from "../Context/MarkDownContext";
import { createEditor, Editor, Text, Transforms } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";

import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";

import ToolBar from "../Components/ToolBar";

const SlateEditor = ({ toggle, index, buttonstate }) => {
  const {
    state: pageState,
    setMarkDown,
    setTitle,
    deletePage,
  } = useContext(Context);

  const decorate = useCallback(([node, path]) => {
    console.log("Node: ");
    console.log(node);

    console.log("Path: ");
    console.log(path);

    const ranges = [];

    if (!Text.isText(node)) {
      return ranges;
    }

    const getLength = (token) => {
      if (typeof token === "string") {
        return token.length;
      } else if (typeof token.content === "string") {
        return token.content.length;
      } else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
      }
    };

    const tokens = Prism.tokenize(node.text, Prism.languages.markdown);
    console.log("TOKENS");
    console.log(tokens);
    let start = 0;

    for (const token of tokens) {
      const length = getLength(token);
      const end = start + length;

      if (typeof token !== "string") {
        console.log(token.type);

        ranges.push({
          [token.type]: true,
          anchor: { path, offset: start },
          focus: { path, offset: end },
        });
      }

      start = end;
    }
    console.log(ranges);
    return ranges;
  }, []);

  const [state, setState] = useState({ value: "" });
  const [click, setClick] = useState(false);

  return (
    <Slate
      editor={pageState[index].editor}
      key={pageState[index].id}
      value={pageState[index].markdown}
      onChange={(changes) => setMarkDown(changes, pageState[index].id)}
    >
      <ToolBar index={index} pageState={pageState} />
    </Slate>
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
