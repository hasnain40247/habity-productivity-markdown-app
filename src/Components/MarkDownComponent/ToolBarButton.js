import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ImUnderline } from "react-icons/im";
import { BsListOl, BsTypeBold } from "react-icons/bs";
import { BiCode, BiDotsVerticalRounded } from "react-icons/bi";
import { VscBold, VscItalic } from "react-icons/vsc";
import { Context as MarkContext } from "../../Context/MarkDownContext";
import { useEditor } from "slate-react";
import { FiBold, FiItalic, FiUnderline, FiCode, FiList } from "react-icons/fi";
import { CustomChecks, isMarkActive } from "../../Utilities/Helpers/CustomEditor";
import { OnClickHandler } from "../../Utilities/Helpers/OnClickHandler";
import { AiOutlineStrikethrough } from "react-icons/ai";

const ToolBarButton = (props) => {
  const { icon, editor, ...otherProps } = props;

  let icons = {
    bold: (
      <FiBold
        style={{
          fontSize: "1rem",
        }}
      />
    ),
    "code-snippet": (
      <FiCode
        style={{
          fontSize: "1rem",
        }}
      />
    ),
    italic: (
      <FiItalic
        style={{
          fontSize: "1rem",
        }}
      />
    ),
    strike: (
      <AiOutlineStrikethrough
        style={{
          fontSize: "1rem",
        }}
      />
    ),
    list: <FiList
    style={{
      fontSize: "1rem",
    }}
    />,
    olist: <BsListOl
    style={{
      fontSize: "1rem",
    }}
    />
  };
  return (
    <div
    className="stylebutton"
      onMouseDown={(event)=>{
        event.preventDefault()
        OnClickHandler(event,icon, editor)
        CustomChecks.isBoldMarkActive(editor)}
      }
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: isMarkActive(editor,icon)
          ? "#928869"
          : "#ffd369",
        color: isMarkActive(editor,icon) ? "#fefcf8" : "#393E46",
        // backgroundColor: isActive ? "#928869" : "#fefcf8",
        // color: isActive ? "#fefcf8" : "#272822",
        marginRight: "5px",
        borderRadius: "6px",
        padding: "5px",
      }}
      // onMouseDown={onMouseDown}
    >
      {icons[icon]}
    </div>
  );
};

export default ToolBarButton;
