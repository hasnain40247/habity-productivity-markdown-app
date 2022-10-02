import React, { useCallback, useState } from "react";
import "./Styles/markdown.css";
import Toolbar, { CHARACTER_STYLES } from "./Toolbar";
import { Context } from "../Context/MarkDownContext";
import { createEditor, Editor, Text, Transforms } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";
import initialValue from "../Utilities/initialState";
import { CodeElement, CustomEditor, Leaf } from "./Utilities/RenderElements";
import ToolBarButton from "./Toolbar";
import {FiBold, FiMoreVertical, FiItalic,FiUnderline} from "react-icons/fi"
const SlateEditor = ({ index }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const [state, setState] = useState({ value: "" });

  let onChange = ({ value }) => {
    setState(value);
  };
  return (
    <Slate editor={editor} value={initialValue}>
       <div className="toolBar">
      <div className="header">
        <input
          className="titleArea"
          type={"text"}
          value={"New Page"}
          // onChange={(change) => {
          //   setTitle(change.target.value, state[index].id);
          // }}
        />
        <h3>
<FiMoreVertical/>
        </h3>
      </div>
      <div className="styles">
        {CHARACTER_STYLES.map((style) => {
        
          return (
            <ToolBarButton
              key={style}
              icon={style}
          
            />
          );
        })}
      </div>
    </div>
      <Editable
        className="richEditor"
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
              CustomEditor.toggleCodeBlock(editor);
              break;
            }
            case "b": {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
          }
        }}
      />
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
