import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJournal } from "../../Features/Journals/journalSlice";

const TitleTag = ({title, currentId}) => {
  const selected=useSelector((state)=>state.journal.selectedJournal)
  const dispatch=useDispatch()
  console.log(selected);
  return (
    <div

    onClick={()=>dispatch(setJournal(currentId))}
      style={{
        color: selected===currentId?"#222831":"#EEEEEE",
        fontWeight: selected===currentId?"bold":"normal",
        cursor:"pointer",
        fontSize: "0.8rem",
        
        backgroundColor: selected===currentId?"#FFD369":"#393E46",
        padding: "8px",
        borderRadius: "10px",
        margin:"3px 0"
      }}
    >
{title}
    </div>
  );
};
export default TitleTag;
