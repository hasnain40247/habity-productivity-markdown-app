import React from "react";
import "../../Styles/markdownStyles.css"
import SlateEditor from "../MarkDownComponent/SlateEditor";

const MarkDown = ({ id }) => {

  // if (id === 0) {
  //   return <EmptySection />;
  // } else {
  //   return (
    
  //       <EditorSection index={index} />
      
  //   );
  // }

  return <SlateEditor index={"1001"} />
};
export default MarkDown;
