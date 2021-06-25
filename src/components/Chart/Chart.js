import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map(data => {
        return (
          <ChartBar 
            key={data.label}
            value={data.value}
            maxValue={null}
            label={data.label}
          />
        )
      })}
    </div>
  )
}

export default Chart;