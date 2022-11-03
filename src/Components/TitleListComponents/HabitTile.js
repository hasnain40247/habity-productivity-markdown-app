import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePage,
  setHabit,
  setPage,
} from "../../Features/Journals/journalSlice";
import "../../Styles/titlelistStyles.css";
import { motion } from "framer-motion";
import { TiDelete } from "react-icons/ti";

const HabitTile = ({ id, name }) => {
  let dispatch = useDispatch();
  const selectedID = useSelector((state) => state.journal.selected.selectID);

  return (
    <motion.div
      initial={{ scale: 0.96 }}
      animate={{ scale: 1 }}
      transition={{
        default: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className="title"
      style={{
        backgroundColor: selectedID === id ? "#fff1d0" : "transparent",
        borderBottom: selectedID===id? "none":"2px solid rgb(67, 67, 67, 0.2)",

        color: selectedID === id ? "#222831" : "#393E46",
        fontWeight: selectedID === id ? "bold" : "normal",
        justifyContent: "space-between",
        borderLeft: selectedID === id ? "solid 4px #222831" : "none",
      }}
    >
      <h5
        onClick={() => {
          dispatch(setHabit(id));
        }}
        style={{
          fontSize: "0.7rem",
          marginLeft: selectedID === id ? "4px" : "0",
          flex: 1,
        }}
      >
        {name}
      </h5>

      <TiDelete
        className="deleteIcon"
        onClick={() => dispatch(deletePage(id))}
        style={{
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      />
    </motion.div>
  );
};

export default HabitTile;
