import React from "react";
import { FiEdit2, FiEye } from "react-icons/fi";


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
            <FiEdit2
              style={{
                color: "#FF9494",
              }}
            />
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
            <FiEye
              style={{
                color: "#B1B2FF",
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