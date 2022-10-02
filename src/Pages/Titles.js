import React, { useContext, useState } from "react";
import "./Styles/Titles.css";

import { IoIosCreate } from "react-icons/io";
import { AiOutlineSortAscending } from "react-icons/ai";

import { Context as MarkContext } from "../Context/MarkDownContext";
import { FiPlusSquare } from "react-icons/fi";

const ListTile = ({ id, name, handleID }) => {
  const [click, setClick] = useState(false);

  return (
    <div
      onClick={() => {
        handleID(id);
        setClick(!click);
      }}
      className="title"
    >
      <h5>{name}</h5>
    </div>
  );
};
const Titles = ({ handleID }) => {
  console.log(handleID);
  const { state } = useContext(MarkContext);
  const { addPage } = useContext(MarkContext);

  console.log("State:", state);

  return (
    <div className="background">
      <div className="Header">
        <AiOutlineSortAscending  style={{
            fontSize:"20px"
          }}  />
        <h5>NoteBook Title</h5>
      
          <FiPlusSquare style={{
            fontSize:"20px"
          }}  onClick={() => {
            console.log("Pressed");
            addPage();
          }}/>
      </div>

      <div className="titleScroll">
        {state.map((e) => {
          return (
            <ListTile id={e.id} name={e.title} handleID={handleID} key={e.id} />
          );
        })}
      </div>
    </div>
  );
};
export default Titles;
