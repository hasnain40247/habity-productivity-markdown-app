import React, { useState } from "react";
import Split from "react-split";
import TitleList from "../Components/SplitComponent/TitleList";
import SideBar from "../Components/SplitComponent/SideBar";
import MarkDownSection from "../Components/SplitComponent/MarkDown";
import MarkDown from "../Components/SplitComponent/MarkDown";
const Home = () => {
  const [id, setID] = useState(0);
  const handleID = (value) => {
    setID(value);
  };
  const [size, setSize] = useState(1);

  return (
    <Split
      direction="horizontal"
      sizes={[15, 25, 60]}
      cursor="col-resize"
      expandToMin={false}
      gutter={(index, direction) => {
        const gutter = document.createElement("div");
        // gutter.addEventListener("mouseover", mouseOver);
        // gutter.addEventListener("mouseout", mouseOut);
        // function mouseOver() {
        //   setSize(3);
        // }

        // function mouseOut() {
        //   setSize(1);
        // }

        gutter.className = `gutter gutter-${direction}`;
        return gutter;
      }}
      snapOffset={1}
      minSize={[200, 300, 500]}
      gutterSize={size}
      gutterAlign="center"
      dragInterval={1}
    
      style={{
        height: "100vh",
        backgroundColor: "#eeeeee",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar />
      <TitleList handleID={handleID} />
      <MarkDown id={id} />
    </Split>
  );
};
export default Home;
