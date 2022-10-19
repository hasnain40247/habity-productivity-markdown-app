import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ImUnderline } from "react-icons/im";
import { BsTypeBold } from "react-icons/bs";
import { BiCode, BiDotsVerticalRounded } from "react-icons/bi";
import { VscBold, VscItalic } from "react-icons/vsc";
import { Context as MarkContext } from "../../Context/MarkDownContext";
import { useEditor } from "slate-react";
import { FiBold, FiItalic, FiUnderline, FiCode, FiList } from "react-icons/fi";
import { CustomEditor } from "../../Utilities/Helpers/CustomEditor";

const ToolBarButton = (props) => {
  const { icon, editor, ...otherProps } = props;

  let icons = {
    bold: <FiBold />,
    code: <FiCode />,
    italic: <FiItalic />,
    underline: <FiUnderline />,
    list: <FiList />,
  };
  return (
    <div
      // onMouseDown={(event)=>OnClickHandler(event,icon, editor)
      // }
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: CustomEditor.isMarkActive(editor, icon)
          ? "#928869"
          : "#EEEEEE",
        color: CustomEditor.isMarkActive(editor, icon) ? "#fefcf8" : "#393E46",
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
};

export default ToolBarButton;
