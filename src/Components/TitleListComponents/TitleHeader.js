import React, { useContext, useState } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Context as MarkContext } from "../../Context/MarkDownContext";
import { addJournal, addPage, onChangeJournalTitle } from "../../Features/Journals/journalSlice";

const TitleHeader = ({ name }) => {
  const selected = useSelector((state) => state.journal.selectedJournal);

  const dispatch = useDispatch();

  return (
    <div className="titleheader">
      {/* <AiOutlineSortAscending className="icons" /> */}
      <h5>
        <input
      
          className="journalTitle"
          onChange={(text) => dispatch(onChangeJournalTitle(text.target.value))}
          value={name}
        />
      </h5>

      <FiPlusSquare
        style={{
          cursor: "pointer",
        }}
        className="icons"
        onClick={() => {
          dispatch(addPage(selected));
        }}
      />
    </div>
  );
};
export default TitleHeader;
