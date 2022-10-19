import React, { useState } from "react";
import "../../Styles/titlelistStyles.css"

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

  export default ListTile