import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./Styles/markdown.css";
import { ImUnderline } from "react-icons/im";
import { BsTypeBold } from "react-icons/bs";
import { BiCode, BiDotsVerticalRounded } from "react-icons/bi";
import { VscBold, VscItalic } from "react-icons/vsc";
import { Context as MarkContext } from "../Context/MarkDownContext";
const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph", "multiple"];
const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];
function ToolBarButton(props) {
  const { icon, isActive, onClick, ...otherProps } = props;
  console.log("Style: " + icon);
  console.log("Active: " + isActive);

  let icons = {
    bold: <BsTypeBold />,
    code: <BiCode />,
    italic: <VscItalic />,
    underline: <ImUnderline />,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: isActive ? "#928869" : "#fefcf8",
        color: isActive ? "#fefcf8" : "#272822",
        margin: "0px 5px",
        borderRadius: "6px",
        padding: "5px",
      }}
      onClick={onClick}
    >
      {icons[icon]}
    </div>
  );
}

const Toolbar = ({index}) => {
  const [active, setActive] = useState(CHARACTER_STYLES[0]);
  const { setMarkDown, setTitle } = useContext(MarkContext);
  const { state } = useContext(MarkContext);

  return (
    <div className="toolBar">
      <div className="header">
        <input className="titleArea" type={"text"}  value={state[index].title}
          onChange={(change) => {
            setTitle(change.target.value, state[index].id);
          }} />
        <h3>
          <BiDotsVerticalRounded />
        </h3>
      </div>
      <div className="styles">
        {CHARACTER_STYLES.map((style) => {
          console.log("hello");
          return (
            <ToolBarButton
              key={style}
              icon={style}
              isActive={active === style}
              onClick={() => setActive(style)}
            />
          );
        })}
      </div>
    </div>
  );
};
// const ButtonToggle = styled(Button)`
//   opacity: 0.7;
//   ${({ active }) =>
//     active &&
//     `
//     opacity: 1;
//   `}
// `;

export default Toolbar;
