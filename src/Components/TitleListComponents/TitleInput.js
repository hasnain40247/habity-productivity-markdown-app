import { useEffect, useRef, useState } from "react";

const TitleInput = ({ name, changeHandler }) => {
  return (
    <div
      style={{
        width: "90%",
      }}
    >
      <h5>
        <input
          className="journalTitle"
          style={{
            width: `${name.length + 1}ch`,
            maxWidth: "90%",
            minWidth: "10%",
            // backgroundColor:"red"
          }}
        
          onChange={changeHandler}
          value={name}
        />
      </h5>
    </div>
  );
};
export default TitleInput;
