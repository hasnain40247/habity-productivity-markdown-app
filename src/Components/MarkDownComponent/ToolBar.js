import React from "react";

import MarkDownHeader from "./MarkDownHeader";
import StyleButtons from "./StyleButtons";

const ToolBar = ({ handleToggle, toggle, pageState, index, editor }) => {
  return (
    <div className="toolbar">
      <MarkDownHeader toggle={toggle} handleToggle={handleToggle} />

      <StyleButtons editor={editor} />
    </div>
  );
};

export default ToolBar;
