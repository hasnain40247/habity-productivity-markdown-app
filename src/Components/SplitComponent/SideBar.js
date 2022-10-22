import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../Styles/sidebarStyles.css";
import Logo from "../SideBarComponents/Logo";
import TitleTag from "../SideBarComponents/TitleTag";
import TypeHeader from "../SideBarComponents/TypeHeader";

const SideBar = () => {
  const journals = useSelector((state) => state.journal.journals);
  console.log(journals);
  return (
    <div className="sidebar">
      <Logo />
      <TypeHeader type={"Journals"} />
      {journals.map((journal) => {
        return <TitleTag key={journal.journalId}  currentId={journal.journalId} title={journal.journalName} />;
      })}

      <TypeHeader type={"Habits"} />
    </div>
  );
};
export default SideBar;
