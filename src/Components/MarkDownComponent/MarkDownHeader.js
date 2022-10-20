import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import PreviewButton from "./PreviewButton";
const MarkDownHeader = ({ handleToggle, toggle }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0px",
      }}
    >
      <input
        className="titleArea"
        type={"text"}
        value="Untitled"
        // value={pageState[index].title}
        // onChange={(change) => {
        //   setTitle(change.target.value, pageState[index].id);
        // }}
      />

      <div className="previewbuttonarea">
        <PreviewButton toggle={handleToggle} buttonstate={toggle} />

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
          <BsFillTrash2Fill
            style={{
              color: "#FF8080",
              fontSize: "1.5rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MarkDownHeader;
