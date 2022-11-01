import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/titlelistStyles.css";
import ListTile from "../TitleListComponents/ListTile";
import TitleHeader from "../TitleListComponents/TitleHeader";
import TitleScrollSection from "../TitleListComponents/TitleScrollSection";

const TitleList = () => {
  const selected = useSelector((state) => state.journal.selected);
  const habits = useSelector((state) => state.journal.habits)

  const journal = useSelector((state) =>
    state.journal.journals.filter(
      (e) => e.journalId === state.journal.selected.selectID
    )
  );

  console.log(journal[0]);

  if (selected.type === "Habit") {
    return (
      <div className="titlelistbackground">
       <div className="titleScroll">
      {habits.slice(0).reverse().map((e) => {
        return (
      
          <ListTile
            id={e.habitId}
            name={e.habitName}
            selectedPage={selected.selectID}

            key={e.habitId}
          />
          
        );
      })}
    </div>
      </div>
    );
  } else {
    return (
      <div className="titlelistbackground">
        {journal[0] ? (
          <>
            <TitleHeader name={journal[0].journalName} />

            <TitleScrollSection
              selectedPage={journal[0].selectedPage}
              pages={journal[0].pages}
            />
          </>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
};
export default TitleList;
