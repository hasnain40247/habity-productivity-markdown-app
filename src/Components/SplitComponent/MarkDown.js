import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/markdownStyles.css";
import EmptySection from "../MarkDownComponent/EmptySection";

import SlateEditor from "../MarkDownComponent/SlateEditor";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import CalendarHeatMap from "../MarkDownComponent/Heatmap";

const MarkDown = () => {
  const selected = useSelector((state) => state.journal.selected);

  const habit = useSelector((state) =>
    state.journal.habits.filter((e) => e.habitId === selected.selectID)
  );

  console.log(habit);
  var data = [];
  return (
    <div
      style={{
        flex: 1,
        boxSizing: "border-box",
        // padding: "5% 10% 3px",
      }}
    >
      {selected.type === "Habit" ? (
        <div
          className="graphdiv"
          style={{
            // padding: "5% 1% 3px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "90%",
            }}
          >
            <h5>
              <input className="titleArea" style={{
                fontSize:"2.3rem"
              }} value={"Task"} />
            </h5>
          </div>
          <h5 style={{
            color:"#393E46"
          }}>{selected.selectID}</h5>

          <CalendarHeatMap
            key={habit[0].habitId}
            id={habit[0].habitId}
            data={habit[0].stamps}
          />
        </div>
      ) : (
        <SlateEditor />
      )}
    </div>
  );
};
export default MarkDown;
