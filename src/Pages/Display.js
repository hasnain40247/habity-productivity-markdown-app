import React, { useContext, useEffect, useState } from "react";
import { Context as MarkContext } from "../Context/MarkDownContext";
import ReactMarkdown from "react-markdown";
import escapeHtml from 'escape-html'
import { Text } from 'slate'
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
import { Node } from "slate";
import rehypeRaw from "rehype-raw";
import PreviewButton from "../Components/PreviewButton";

const Preview = ({ index, toggle, buttonstate }) => {
  const { setMarkDown, setTitle } = useContext(MarkContext);
  const { state: pageState } = useContext(MarkContext);
  const [mark,setMark]=useState("")
  let curr=[]
  console.log(pageState[index].markdown)

  const serialize = nodes => {
    return nodes.map(n => Node.string(n)).join('\n')
  }


 serialize(pageState[index].markdown)
const htm="<h1>HOHOHOOHHO</h1>"
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width:"100%"
      }}
    >

<div className="toolBar">
        <div className="header">
          <input
            className="titleArea"
            disabled
            type={"text"}
            value={pageState[index].title}
            onChange={(change) => {
              setTitle(change.target.value, pageState[index].id);
            }}
          />
       
      


      <h3 style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center",
              borderRadius:"5px",
              backgroundColor:"#fffbf1"
      }}>
      <PreviewButton  toggle={toggle} buttonstate={buttonstate} />

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
                // setClick(!click);
              }}
            >
              <FiMoreVertical style={{
                color:"#928869"
              }} />
            </div>
          </h3>
          </div>

        
   
   
     
      </div>
      <ReactMarkdown className="richEditor" >{
 serialize(pageState[index].markdown)

      }</ReactMarkdown>
    </div>
  );
};
export default Preview;
