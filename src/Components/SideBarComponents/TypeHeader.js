import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiMentalHealthFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addHabit,
  addJournal,
  setHabit,
  setJournal,
} from "../../Features/Journals/journalSlice";

const TypeHeader = ({ type }) => {
  const selected = useSelector((state) => state.journal.selected.type);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setHabit());
      }}
      className="typeheader"
      style={{
        marginTop: type === "Habits" ? "10px" : "5px",
        borderRadius: type === "Habits" ? "10px" : "0",
        backgroundColor:
          type === "Habits"
            ? selected === "Habit"
              ? "#FFD369"
              : "#393E46"
            : "transparent",
        color:
          type === "Habits"
            ? selected === "Habit"
              ? "#222831"
              : "#EEEEEE"
            : "#FFD369",

        cursor: type === "Habits" ? "pointer" : "default",
      }}
    >
      <div className="typeheaderRow">
        <div>
          {type === "Habits" ? <RiMentalHealthFill /> : <GoPencil />}
          <p
            style={{
              color:
                type === "Habits"
                  ? selected === "Habit"
                    ? "#222831"
                    : "#EEEEEE"
                  : "#EEEEEE",
            }}
          >
            {type}
          </p>
        </div>

        <MdOutlineAdd
          onClick={() => {
            if (type === "Habits") {
              dispatch(addHabit());
            } else {
              dispatch(addJournal());
            }
          }}
          className="typeicon"
        />
      </div>
      {type === "Habits" ? (
        <div className="productivitycontainer">
          <p
            style={{
              margin: "3px 0",
              fontWeight: "bold",
            }}
          >
            Track Your Productivity
          </p>
          <div>
            <p
              className={selected === "Habit" ? "tagtitleshadow" : ""}
              style={{
                fontWeight: selected === "Habit" ? "bolder" : "bold",
                color: "#42855B",
              }}
            >
              Today
            </p>
            <p
              className={selected === "Habit" ? "tagshadow tag" : "tag"}
              style={{
                backgroundColor: "#FF4A4A",
              }}
            >
              Active
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default TypeHeader;
