import React, { useCallback, useContext, useState } from "react";
import "./Styles/markdown.css";
import Toolbar, { CHARACTER_STYLES } from "./Toolbar";
import { Context } from "../Context/MarkDownContext";
import { createEditor, Editor, Text, Transforms } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";
import initialValue from "../Utilities/initialState";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";

import {
  BoldElement,
  CodeElement,
  CustomEditor,
  Leaf,
  ListElement,
  UnderLineElement,
} from "./Utilities/RenderElements";
import ToolBarButton from "./Toolbar";
import {
  FiBold,
  FiMoreVertical,
  FiItalic,
  FiUnderline,
  FiDelete,
  FiTrash2,
  FiEye,
  FiEdit2,
  FiBookOpen,
} from "react-icons/fi";
import { OnClickHandler } from "./Utilities/OnClickHandler";

export const PreviewButton = ({ buttonstate, toggle }) => {
  switch (buttonstate) {
    case 0:
      return (
        <div
          onClick={toggle}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#272822",
            // backgroundColor: isActive ? "#928869" : "#fefcf8",
            // color: isActive ? "#fefcf8" : "#272822",
            margin: "0px 5px",
            borderRadius: "6px",
            padding: "5px",
          }}
          // onMouseDown={onMouseDown}
        >
          <FiEdit2
            style={{
              color: "#FF9494",
            }}
          />
        </div>
      );

      break;
    case 1:
      return (
        <div
          onClick={toggle}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#272822",
            // backgroundColor: isActive ? "#928869" : "#fefcf8",
            // color: isActive ? "#fefcf8" : "#272822",
            margin: "0px 5px",
            borderRadius: "6px",
            padding: "5px",
          }}
          // onMouseDown={onMouseDown}
        >
          <FiEye
            style={{
              color: "#B1B2FF",
            }}
          />
        </div>
      );
      break;

    default:
      return;
  }
};

const SlateEditor = ({ toggle, index, buttonstate }) => {
  const {
    state: pageState,
    setMarkDown,
    setTitle,
    deletePage,
  } = useContext(Context);

  const renderElement = useCallback((props) => {
    console.log("props.element.type");
    console.log(props.element.type);

    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "list":
        return <ListElement {...props} />;
      case "h1":
        return (
          <strong className="spanss" {...props.attributes}>
            **{props.children}**
          </strong>
        );

      case "boldmark":
        return (
          <span
            style={{ fontWeight: "bold" }}
            {...props.attributes}
            className={"link"}
          >
            <span>**</span>
            <span>{props.children}</span>

            <span>**</span>
          </span>
        );

      case "italicmark":
        return (
          <span
            style={{ fontStyle: "italic" }}
            {...props.attributes}
            className={"link"}
          >
            <span>*</span>
            <span>{props.children}</span>

            <span>*</span>
          </span>
        );

      case "listmark":
        return (
          <span
            style={{ paddingLeft: "10px", display: "block" }}
            {...props.attributes}
            className={"link"}
          >
            <span>- </span>
            <span>{props.children}</span>
          </span>
        );

      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} editor={pageState[index].editor} />;
  }, []);

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
      <div className="toolBar">
        <div className="header">
          <input
            className="titleArea"
            type={"text"}
            value={pageState[index].title}
            onChange={(change) => {
              setTitle(change.target.value, pageState[index].id);
            }}
          />

          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              backgroundColor: "#fffbf1",
            }}
          >
            <PreviewButton toggle={toggle} buttonstate={buttonstate} />

            <div
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // backgroundColor: isActive ? "#928869" : "#fefcf8",
                // color: isActive ? "#fefcf8" : "#272822",
                margin: "0px 5px",
                borderRadius: "6px",
                padding: "5px",
              }}
              onClick={() => {
                setClick(!click);
              }}
            >
              <FiMoreVertical
                style={{
                  color: "#928869",
                }}
              />
            </div>
          </h3>
        </div>

        <div className="styles">
          {CHARACTER_STYLES.map((style) => {
            return (
              <ToolBarButton
                key={style}
                icon={style}
                editor={pageState[index].editor}
              />
            );
          })}
        </div>
      </div>
      <Editable
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
      />

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
      ) : null}
    </Slate>

    // <Slate editor={editor}  value={} onChange={onChangeHandler}>
    //   <Toolbar index={index} selection={selection} />

    //   <Editable
    //   key={state[index].id}
    //     className="richEditor"
    //     wrap="off"
    //     renderLeaf={renderLeaf}
    //     renderElement={renderElement}
    //     onKeyDown={onKeyDown}
    //   />
    // </Slate>
  );
};
export default SlateEditor;
