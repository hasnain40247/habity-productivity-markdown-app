import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./Styles/markdown.css";
import { ImUnderline } from "react-icons/im";
import { BsTypeBold } from "react-icons/bs";
import { BiCode, BiDotsVerticalRounded } from "react-icons/bi";
import { VscBold, VscItalic } from "react-icons/vsc";
import { Context as MarkContext } from "../Context/MarkDownContext";
import { useEditor } from "slate-react";
import {FiBold, FiMoreVertical, FiItalic,FiUnderline, FiCode} from "react-icons/fi"

const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph", "multiple"];
export const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];
const ToolBarButton=(props)=> {
  const { icon,  ...otherProps } = props;

  let icons = {
    bold: <FiBold/>,
    code: <FiCode />,
    italic: <FiItalic />,
    underline: <FiUnderline />,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: isActive ? "#928869" : "#fefcf8",
        // color: isActive ? "#fefcf8" : "#272822",
        margin: "0px 5px",
        borderRadius: "6px",
        padding: "5px",
      }}
      // onMouseDown={onMouseDown}
    >
      {icons[icon]}
    </div>
  );
}

export default ToolBarButton
