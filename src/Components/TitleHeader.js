import React, { useContext } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { Context as MarkContext } from "../Context/MarkDownContext";

const TitleHeader = () => {
  const { addPage } = useContext(MarkContext);

  return (
    <div className="titleheader">
      <AiOutlineSortAscending
      className="icons"
    
      />
      <h5 >NoteBook Title</h5>

      <FiPlusSquare
      className="icons"
    
        onClick={() => {
          console.log("Pressed");
          addPage();
        }}
      />
    </div>
  );
};
export default TitleHeader;
