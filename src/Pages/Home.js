import React, { useState } from "react";
import Split from "react-split";
import TitleList from "../Components/SplitComponent/TitleList";
import SideBar from "../Components/SplitComponent/SideBar";
import MarkDownSection from "../Components/SplitComponent/MarkDown";
import MarkDown from "../Components/SplitComponent/MarkDown";
const Home = () => {
  const [id, setID] = useState(0);

  return (
    <Split
      direction="horizontal"
      sizes={[20, 30, 50]}
      cursor="col-resize"
      expandToMin={false}
      gutter={(index, direction) => {
        const gutter = document.createElement("div");
        gutter.className = `gutter gutter-${direction}`;
        return gutter;
      }}
      minSize={[200, 300, 700]}
      gutterSize={1}
      snapOffset={2}
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
      <TitleList
        handleID={(value) => {
          setID(value);
        }}
      />
      <MarkDown id={id} />
    </Split>
  );
};
export default Home;
