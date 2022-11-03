import { MotionConfig } from "framer-motion";
import React, { useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { deletePage, setPage } from "../../Features/Journals/journalSlice";
import "../../Styles/titlelistStyles.css";
import { motion } from "framer-motion";
import { TiDelete } from "react-icons/ti";

const ListTile = ({ id, name, selectedPage }) => {
  const [click, setClick] = useState(false);
  let dispatch = useDispatch();
  console.log(selectedPage);
  console.log(id);

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
        backgroundColor: selectedPage === id ? "#fff1d0" : "transparent",
        borderBottom: selectedPage===id? "none":"2px solid rgb(67, 67, 67, 0.2)",

        color: selectedPage === id ? "#222831" : "#393E46",
        fontWeight: selectedPage === id ? "bold" : "normal",
        justifyContent: "space-between",
        borderLeft: selectedPage === id ? "solid 4px #393E46" : "none",
      }}
    >
      <h5
          onClick={() => {
            dispatch(setPage(id));
          }}
        style={{
          fontSize: "0.7rem",
          marginLeft: selectedPage === id ? "4px" : "0",
          flex:1
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

export default ListTile;
