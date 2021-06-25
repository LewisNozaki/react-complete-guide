import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const valueArr = dataPoints.map(data => data.value);

  const totalMax = Math.max(...valueArr);

  return (
    <div className="chart">
      {dataPoints.map(data => {
        return (
          <ChartBar 
            key={data.label}
            value={data.value}
            maxValue={totalMax}
            label={data.label}
          />
        )
      })}
    </div>
  )
}

export default Chart;