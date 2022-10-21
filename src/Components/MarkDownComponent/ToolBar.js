import React from "react";

import MarkDownHeader from "./MarkDownHeader";
import StyleButtons from "./StyleButtons";

const ToolBar = ({ handleToggle, toggle, pageState, index, editor }) => {
  return (
    <div className="toolbar">
      <MarkDownHeader toggle={toggle} handleToggle={handleToggle} />

     {toggle===0? <StyleButtons editor={editor} />:null}
    </div>
  );
};

export default ToolBar;
