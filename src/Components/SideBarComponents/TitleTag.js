import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJournal } from "../../Features/Journals/journalSlice";
import { motion } from "framer-motion";

const TitleTag = ({ title, currentId }) => {
  const selected = useSelector((state) => state.journal.selectedJournal);
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
      onClick={() => dispatch(setJournal(currentId))}
      style={{
        color: selected === currentId ? "#222831" : "#EEEEEE",
        fontWeight: selected === currentId ? "bold" : "normal",
        cursor: "pointer",
        fontSize: "0.8rem",

        backgroundColor: selected === currentId ? "#FFD369" : "#393E46",
        padding: "10px",
        borderRadius: "10px",
        margin: "7px 0",
      }}
    >
      {title}
    </motion.div>
  );
};
export default TitleTag;
