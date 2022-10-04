import React, { useState } from "react";
import "./Styles/markdown.css";
import SlateEditor from "./Slate";
import { FiTrash2 } from "react-icons/fi";
import Display from "./Display";
const Editor = ({ index }) => {
  const [state, setState] = useState(0);

  const toggleState=()=>{
  console.log(state)

    console.log("Button Pressed")

  if (state === 0 ) {
    setState(1);

   }else {
    setState(0);

  }}
if(state===0)
  return (
    
         
      <SlateEditor toggle={toggleState} buttonstate={state} index={index} />
    
  );
  else{
    return <Display toggle={toggleState} buttonstate={state} index={index} />
  }

};


export default Editor;
