import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";
const DeleteButtton = () => {
  return (
    <div
      //   onClick={toggle}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#272822",
        marginLeft: "5px",

        borderRadius: "6px",
        padding: "5px",
      }}
      // onMouseDown={onMouseDown}
    >
      <BsFillTrash2Fill
        style={{
          color: "#CF0A0A",
          fontSize: "1.5rem",
        }}
      />
    </div>
  );
};
export default DeleteButtton;
