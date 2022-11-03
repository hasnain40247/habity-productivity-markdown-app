import * as React from "react";
import moment from "moment";
import * as d3 from "d3";
import styles from "../../Styles/calendar-heatmap.css";
import { useRef } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { parseHabit } from "../../Features/Journals/journalSlice";

const CalendarHeatMap = ({
  data = [],
  overview = "year",
  bubblecolor = "#FFD369",
  handler = undefined,
  id,
}) => {
  const gutter = 5;
  const item_gutter = 1;
  const width = 850;
  const height = 200;
  const item_size = 10;
  const label_padding = 40;
  const max_block_height = 20;
  const transition_duration = 500;
  const tooltip_width = 250;
  const tooltip_padding = 15;
  let items;
  let buttons;
  let labels;
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data.length);
    createComponents();
    parseData();
    drawYearOverview();
  }, [data.length]);

  const DAYS = (start) => {
    const days = [];
    let dateStart = moment(start);

    const dateEnd = moment();
    console.log(days);

    if (dateEnd.diff(dateStart, "days") > 0) {
      while (dateEnd.diff(dateStart, "days") > 0) {
        dateStart.add(1, "days");

        days.push({
          id: uuid(),
          date: dateStart.format("YYYY-MM-DD"),

          total: 0,
          details: [],
        });
      }

      dispatch(parseHabit({ days, id }));
    }
  };
  const parseData = () => {
    let dat = data;
    console.log(dat[dat.length - 1]);
    DAYS(dat[dat.length - 1].date);
  };
  const createComponents = () => {
    let svg = d3.select("#calendar-heatmap").append("svg").attr("class", "svg");

    // Create other svg elements
    items = svg.append("g");
    labels = svg.append("g");
    buttons = svg.append("g");
  };

  const drawYearOverview = () => {
    // Add current overview to the history
    // if (this.history[this.history.length - 1] !== this.overview) {
    //   this.history.push(this.overview)
    // }

    // Define start and end date of the selected year
    let start_of_year = moment().subtract(1, "year");
    let end_of_year = moment();
    console.log(start_of_year);
    console.log(end_of_year);

    // Filter data down to the selected year
    let year_data = data.filter((d) => {
      return start_of_year <= moment(d.date) && moment(d.date) < end_of_year;
    });
    // Calculate max value of the year data
    let max_value = d3.max(year_data, (d) => d.total);

    let color = d3
      .scaleLinear()
      .range(["#EEEEEE", bubblecolor])
      .domain([-0.15 * max_value, max_value]);

    let calcItemX = (d) => {
      let date = moment(d.date);
      let dayIndex = Math.round(
        (date - moment(start_of_year).startOf("week")) / 86400000
      );
      let colIndex = Math.trunc(dayIndex / 7);
      return colIndex * (item_size + gutter) + label_padding;
    };

    let calcItemY = (d) => {
      return label_padding + moment(d.date).weekday() * (item_size + gutter);
    };

    let calcItemSize = (d) => {
      if (max_value <= 0) {
        return item_size;
      }
      return item_size * 0.75 + ((item_size * d.total) / max_value) * 0.25;
    };

    items.selectAll(".item-circle").remove();
    items
      .selectAll(".item-circle")
      .data(year_data)
      .enter()
      .append("rect")
      .attr("class", "item item-circle")
      .style("cursor", "pointer")
      .style("opacity", 1)
      .style("stroke", (d)=>{
        return d.total>0?"rgb(57,62,70,0.2)":"#FFD369"

      })
      .style("stroke-width", (d)=>{
        return d.total>0?"1":"2"
      })
      .attr("x", (d) => {
        return calcItemX(d) + (item_size - calcItemSize(d)) / 2;
      })
      .attr("y", (d) => {
        return calcItemY(d) + (item_size - calcItemSize(d)) / 2;
      })
      .attr("rx", (d) => {
        return calcItemSize(d);
      })
      .attr("ry", (d) => {
        return calcItemSize(d);
      })
      .attr("width", (d) => {
        return calcItemSize(d);
      })
      .attr("height", (d) => {
        return calcItemSize(d);
      })
      .attr("fill", (d) => {
        return d.total > 0 ? color(d.total) : "#EEEEEE";
      });

    // Add month labels
    let month_labels = d3.timeMonths(start_of_year, end_of_year);
    console.log(month_labels);
    let monthScale = d3
      .scaleLinear()
      .range([0, width])
      .domain([0, month_labels.length]);

    labels.selectAll(".label-month").remove();
    labels
      .selectAll(".label-month")
      .data(month_labels)
      .enter()
      .append("text")
      .attr("class", "label label-month")
      .style("cursor", "pointer")
      .style("fill", "rgb(57, 62, 70,0.8)")
      .style("font-weight", "bold")
      .attr("font-size", () => {
        return Math.floor(label_padding / 3) + "px";
      })
      .text((d) => {
        return d.toLocaleDateString("en-us", { month: "short" });
      })
      .attr("x", (d, i) => {
        return monthScale(i) + (monthScale(i) - monthScale(i - 1)) / 2;
      })
      .attr("y", label_padding / 2);

    let day_labels = d3.timeDays(
      moment().startOf("week"),
      moment().endOf("week")
    );

    let dayScale = d3
      .scaleBand()
      .rangeRound([label_padding, 150])
      .domain(
        day_labels.map((d) => {
          return moment(d).weekday();
        })
      );
    labels.selectAll(".label-day").remove();
    labels
      .selectAll(".label-day")
      .data(day_labels)
      .enter()
      .append("text")
      .attr("class", "label label-day")
      .style("cursor", "pointer")
      .style("font-weight", "bold")
      .style("fill", "rgb(57, 62, 70,0.8)")
      .attr("x", label_padding / 3)
      .attr("y", (d, i) => {
        return dayScale(i) + dayScale.bandwidth() / 2.2;
      })
      .style("text-anchor", "left")
      .style("text-align", "center")
      .attr("font-size", () => {
        return Math.floor(label_padding / 4) + "px";
      })
      .text((d) => {
        return moment(d).format("dddd")[0];
      });
  };

  return (
    <div
      id="calendar-heatmap"
      className={styles.calendarHeatmap}
      ref={ref}
    ></div>
  );
};

export default CalendarHeatMap;
