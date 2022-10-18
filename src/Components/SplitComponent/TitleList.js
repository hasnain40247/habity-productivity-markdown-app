import React from "react";
import "../../Styles/titlelistStyles.css";
import TitleHeader from "../TitleHeader";
import TitleScrollSection from "../TitleScrollSection";

const TitleList = ({ handleID }) => {
  return (
    <div className="titlelistbackground">
      <TitleHeader />
      <TitleScrollSection handleID={handleID} />
    </div>
  );
};
export default TitleList;
