import React from "react";
import { FiEdit2, FiEye } from "react-icons/fi";
import {AiFillEdit, AiFillEye} from "react-icons/ai"


const PreviewButton = ({ buttonstate, toggle }) => {
    switch (buttonstate) {
      case 0:
        return (
          <div
            onClick={toggle}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#272822",

              margin: "0px 5px",
              borderRadius: "6px",
              padding: "5px",
            }}
            // onMouseDown={onMouseDown}
          >
     
            <AiFillEdit style={{
                color: "#66BFBF",
  fontSize: "1.5rem"


            }}/>
          </div>
        );
  
        break;
      case 1:
        return (
          <div
            onClick={toggle}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#272822",
              // backgroundColor: isActive ? "#928869" : "#fefcf8",
              // color: isActive ? "#fefcf8" : "#272822",
              margin: "0px 5px",
              borderRadius: "6px",
              padding: "5px",
            }}
            // onMouseDown={onMouseDown}
          >
            <AiFillEye
              style={{
                color: "#B1B2FF",
  fontSize: "1.5rem"

              }}
            />
          </div>
        );
        break;
  
      default:
        return;
    }
  };

  export default PreviewButton