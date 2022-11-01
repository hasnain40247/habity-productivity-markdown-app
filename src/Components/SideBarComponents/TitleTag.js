import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJournal,
  setJournal,
} from "../../Features/Journals/journalSlice";
import { motion } from "framer-motion";
import { TiDelete } from "react-icons/ti";

const TitleTag = ({ title, currentId }) => {
  const selected = useSelector((state) => state.journal.selected);
  const dispatch = useDispatch();
  console.log(selected);

  return (
    <motion.div
      initial={{ scale: 0.93 }}
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
      style={{
        color: selected.selectID === currentId ? "#222831" : "#EEEEEE",
        fontWeight: selected.selectID === currentId ? "bold" : "normal",
        cursor: "pointer",
        fontSize: "0.8rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: selected.selectID === currentId ? "#FFD369" : "#393E46",
        padding: "10px",
        borderRadius: "10px",
        margin: "7px 0",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
        onClick={() => dispatch(setJournal(currentId))}
      >
        {title}
      </div>
      <TiDelete
      className="deleteIcon"
        onClick={() => {
          console.log("click");
          dispatch(deleteJournal(currentId));
        }}
        style={{
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      />
    </motion.div>
  );
};
export default TitleTag;
