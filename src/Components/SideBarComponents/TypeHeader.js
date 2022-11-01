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
        borderRadius: type === "Habits" ? "5px" : "0",
        backgroundColor:
          type === "Habits"
            ? selected === "Habit"
              ? 
            "#EEEEEE":"#749F82"
            : "transparent",
        color:
          type === "Habits"
            ? selected === "Habit"
              ?      "#222831":"#393E46"
         
            : "#FFD369",

        cursor: type === "Habits" ? "pointer" : "default",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
              color:
                type === "Habits"
                  ? selected === "Habit"
                    ? "#222831":"#393E46"
                  : "#EEEEEE",

              marginLeft: "10px",
              fontWeight: "bolder",
            }}
          >
            {type}
          </p>
        </div>

        <MdOutlineAdd
          onClick={() => {
            type === "Habits" ? dispatch(addHabit()) : dispatch(addJournal());
          }}
          style={{
            fontSize: "1.3rem",
            cursor: "pointer",
          }}
        />
      </div>
{type==="Habits"?


<div style={{
    
  borderRadius:"10px",
  display:"flex",
  flexDirection:"column",
  padding:"10px"
 }}>
  <h6 style={{margin:0}}>Track Your Productivity</h6>
 <div style={{
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between"
 }}>

<h6 style={{margin:0}}>Today</h6>
  <h6 style={{margin:0, backgroundColor:"#FF6464", padding:"5px", borderRadius:"10px"}}>Active</h6>
 </div>


 </div>:null}
    </div>
  );
};
export default TypeHeader;
