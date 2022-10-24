import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { onChangePageTitle } from "../../Features/Journals/journalSlice";
import DeleteButtton from "./DeleteButton";
import PreviewButton from "./PreviewButton";
const MarkDownHeader = ({ page, handleToggle, toggle }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
        }}
      >
        <h5>
          <input
            className="titleArea"
            style={{
              width: `${page.pageName.length + 1}ch`,
              maxWidth: "90%",
              minWidth: "10%",
            }}
            onChange={(text) => {
              dispatch(onChangePageTitle(text.target.value));
            }}
            value={page.pageName}
          />
        </h5>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <PreviewButton toggle={handleToggle} buttonstate={toggle} />
        <DeleteButtton />
      </div>
    </div>
  );
};
export default MarkDownHeader;
