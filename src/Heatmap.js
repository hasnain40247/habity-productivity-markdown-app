import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import CalendarHeatmap from 'reactjs-calendar-heatmap'

// import { legend } from '@d3/color-legend';

const Heatmap = ({ data }) => {
    var data = [{
        "date": "2016-01-01",
        "total": 17164,
        "details": [{
          "name": "Project 1",
          "date": "2016-01-01 12:30:45",
          "value": 9192
        }, {
          "name": "Project 2",
          "date": "2016-01-01 13:37:00",
          "value": 6753
        },

        {
          "name": "Project N",
          "date": "2016-01-01 17:52:41",
          "value": 1219
        }]
      }]


  return (

<CalendarHeatmap
  data={data}
  color={"blue"}>

</CalendarHeatmap>

  );
};

export default Heatmap;
