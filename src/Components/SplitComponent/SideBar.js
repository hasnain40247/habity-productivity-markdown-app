import React from "react";

import { useSelector } from "react-redux";
import "../../Styles/sidebarStyles.css";
import Logo from "../SideBarComponents/Logo";
import TitleTag from "../SideBarComponents/TitleTag";
import TypeHeader from "../SideBarComponents/TypeHeader";

const SideBar = () => {
  const journals = useSelector((state) => state.journal.journals);
  const habits = useSelector((state) => state.journal.habits);

  console.log(journals);
  return (
    <div className="sidebar">
      <Logo />

      <TypeHeader type={"Journals"} />

      <div className="container">
        {journals
          .slice(0)
          .reverse()
          .map((journal) => {
            return (
              <TitleTag
                key={journal.journalId}
                currentId={journal.journalId}
                title={journal.journalName}
              />
            );
          })}
      </div>
      <TypeHeader type={"Habits"} />
    </div>
  );
};
export default SideBar;
