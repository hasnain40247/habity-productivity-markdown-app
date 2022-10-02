import React, { useCallback, useContext, useState } from "react";
import "./Styles/markdown.css";
import Toolbar, { CHARACTER_STYLES } from "./Toolbar";
import { Context } from "../Context/MarkDownContext";
import { createEditor, Editor, Text, Transforms } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";
import initialValue from "../Utilities/initialState";
import {
  CodeElement,
  CustomEditor,
  Leaf,
  ListElement,
  UnderLineElement,
} from "./Utilities/RenderElements";
import ToolBarButton from "./Toolbar";
import { FiBold, FiMoreVertical, FiItalic, FiUnderline, FiDelete, FiTrash2 } from "react-icons/fi";
const SlateEditor = ({ index }) => {
  const { state: pageState, setMarkDown, setTitle,deletePage } = useContext(Context);
  console.log("Page State", pageState[index].editor);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "list":
        return <ListElement {...props} />;
    case "h3":
          return <h3 {...props.attributes}>{props.children}</h3>;

      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const [state, setState] = useState({ value: "" });
  const [click, setClick] = useState(false);


  let onChange = ({ value }) => {
    setState(value);
  };
  console.log("Page State");

  console.log(pageState[index].markdown);
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
          <h3>
           <div style={{
          cursor:"pointer"
           }} onClick={()=>{
              setClick(!click)
            }} >
           <FiMoreVertical />
       
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

{click?
  <div   style={{
              backgroundColor:"#928869",
              position:"absolute",
              right:"1.2%",
              top:"8%",
              borderRadius:"5px",
              display:"flex",
              flexDirection:"column"

            }}>
              <div onClick={()=>deletePage(pageState[index].id)}   style={{
                cursor:"pointer",
               
                display:"flex",
                flexDirection:"row",
                color:"#272822",
                verticalAlign:"bottom",
                alignItems:"center",
                justifyContent:"space-between",
                fontSize:"0.7rem",
                fontWeight:"bold",
                width:"90px",
                padding:"2px 20px"
              }}>
               <p> <FiTrash2/></p>
                <p>Delete Page</p>
                </div>
            </div>: null
}
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
