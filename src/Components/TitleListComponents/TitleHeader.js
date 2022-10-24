import React, { useContext, useState } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { MdAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Context as MarkContext } from "../../Context/MarkDownContext";
import {
  addJournal,
  addPage,
  onChangeJournalTitle,
} from "../../Features/Journals/journalSlice";
import TitleInput from "./TitleInput";

const TitleHeader = ({ name }) => {
  const selected = useSelector((state) => state.journal.selectedJournal);

  const dispatch = useDispatch();

  return (
    <div className="titleheader">
      <TitleInput
        name={name}
        changeHandler={(text) =>
          dispatch(onChangeJournalTitle(text.target.value))
        }
      />

      <MdAddBox
        className="icons"
        onClick={() => {
          dispatch(addPage(selected));
        }}
      />
    </div>
  );
};
export default TitleHeader;
