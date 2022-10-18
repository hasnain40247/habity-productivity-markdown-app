import React, { useState } from "react";
import Preview from "../../Pages/Display";
import Display from "../../Pages/Display";
import SlateEditor from "../../Pages/SlateEditor";

const EditorSection = ({ index }) => {
  const [state, setState] = useState(0);

  const toggleState = () => {
    if (state === 0) {
      setState(1);
    } else {
      setState(0);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="markdown">
        {state === 0 ? (
          <SlateEditor toggle={toggleState} buttonstate={state} index={index} />
        ) : (
          <Preview toggle={toggleState} buttonstate={state} index={index} />
        )}
      </div>
    </div>
  );
};

export default EditorSection;
