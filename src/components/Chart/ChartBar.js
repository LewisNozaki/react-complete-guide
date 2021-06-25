import React from "react";
import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round(( value / maxValue ) * 100) + "%";
  }

  let barFillStyle = {
    height: barFillHeight
  }
  
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div 
          className="chart-bar__fill" 
          style={barFillStyle}
          ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}

export default ChartBar;