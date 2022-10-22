import React, { useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../Features/Journals/journalSlice";
import "../../Styles/titlelistStyles.css";

const ListTile = ({ id, name, handleID, selectedPage }) => {
  const [click, setClick] = useState(false);
  let dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setPage(id));
      }}
      className="title"
      style={{
        backgroundColor: selectedPage === id ? "#fff1d0" : "transparent",
        color: selectedPage === id ? "#222831" : "#393E46",
        fontWeight: selectedPage === id ? "bold" : "normal",
      }}
    >
      {selectedPage === id ? (
        <div
          style={{
            borderLeft: "solid 4px #222831",
            height: "100%",
            marginRight: "5px",
          }}
        />
      ) : null}

      <h5 style={{
        fontSize: "0.7rem",

      }}>{name}</h5>
    </div>
  );
};

export default ListTile;
