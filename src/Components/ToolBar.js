import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { charStyles } from "../Utilities/Helpers/EditorStyles";
import PreviewButton from "./PreviewButton";
import ToolBarButton from "./ToolBarButton";


const ToolBar = ({pageState, index}) => {
  return (
    <div className="toolBar">
      <div className="header">
        <input
          className="titleArea"
          type={"text"}
          // value={pageState[index].title}
          // onChange={(change) => {
          //   setTitle(change.target.value, pageState[index].id);
          // }}
        />

        <h3
          className="previewbuttonarea"
        >
          <PreviewButton
          //  toggle={toggle} buttonstate={buttonstate}
            />

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
            <FiMoreVertical
              style={{
                color: "#928869",
              }}
            />
          </div>
        </h3>
      </div>

      <div className="styles">
        {charStyles.map((style) => {
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
  );
};

export default ToolBar