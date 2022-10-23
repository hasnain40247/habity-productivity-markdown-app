import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiMentalHealthFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addJournal } from "../../Features/Journals/journalSlice";
const TypeHeader = ({ type }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        color: "#FFD369",
        fontFamily: "Montserrat",
        display: "flex",
        flexDirection: "row",
        fontWeight: "bolder",
        padding: "0% 4%",

        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {type === "Habits" ? <RiMentalHealthFill /> : <GoPencil />}
        <p
          style={{
            color: "#EEEEEE",
            marginLeft: "10px",
            fontWeight: "bolder",
          }}
        >
          {type}
        </p>
      </div>
      <MdOutlineAdd
        onClick={() => {
          dispatch(addJournal());
        }}
        style={{
          fontSize: "1.3rem",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
export default TypeHeader;
