import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/titlelistStyles.css";
import TitleHeader from "../TitleListComponents/TitleHeader";
import TitleScrollSection from "../TitleListComponents/TitleScrollSection";

const TitleList = ({ handleID }) => {
  const selected = useSelector((state) => state.journal.selectedJournal);
  const journal = useSelector((state) =>
    state.journal.journals.filter((e) => e.journalId === selected)
  );
  return (
    <div className="titlelistbackground">
      <TitleHeader name={journal[0].journalName} />


<TitleScrollSection  selectedPage={journal[0].selectedPage} pages={journal[0].pages}  handleID={handleID} />


      
    </div>
  );
};
export default TitleList;
