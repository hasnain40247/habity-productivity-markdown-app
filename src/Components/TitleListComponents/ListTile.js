import { MotionConfig } from "framer-motion";
import React, { useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../Features/Journals/journalSlice";
import "../../Styles/titlelistStyles.css";
import { motion } from "framer-motion";

const ListTile = ({ id, name, handleID, selectedPage }) => {
  const [click, setClick] = useState(false);
  let dispatch = useDispatch();

  return (
    <motion.div
      initial={{  scale: 0.96 }}
      animate={{  scale: 1 }}
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

      <h5
        style={{
          fontSize: "0.7rem",
        }}
      >
        {name}
      </h5>
    </motion.div>
  );
};

export default ListTile;
