import React, { useState } from "react";

import MarkDownHeader from "./MarkDownHeader";
import StyleButtons from "./StyleButtons";

const ToolBar = ({ editor,page, toggle,handleToggle }) => {

  return (
    <div className="toolbar">
      <MarkDownHeader page={page} toggle={toggle} handleToggle={handleToggle} />

      {toggle === 0 ? <StyleButtons editor={editor} /> : null}
    </div>
  );
};

export default ToolBar;
