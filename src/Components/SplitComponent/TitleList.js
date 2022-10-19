import React from "react";
import "../../Styles/titlelistStyles.css";
import TitleHeader from "../TitleListComponents/TitleHeader";
import TitleScrollSection from "../TitleListComponents/TitleScrollSection";


const TitleList = ({ handleID }) => {
  return (
    <div className="titlelistbackground">
      <TitleHeader />
      <TitleScrollSection handleID={handleID} />
    </div>
  );
};
export default TitleList;
