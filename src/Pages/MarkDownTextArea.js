import React, { useContext, useEffect, useRef, useState } from "react";
import "./Styles/markdown.css";
import { Context as MarkContext } from "../Context/MarkDownContext";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MDEditor from "@uiw/react-md-editor";
import {VscBold, VscItalic} from "react-icons/vsc"
import Editor from "./Editor";

const MarkDownTextArea = ({ index }) => {
 


  return (
    <div className="markdown">
  

 <Editor index={index}/>
    </div>
  );
};

export default MarkDownTextArea;
