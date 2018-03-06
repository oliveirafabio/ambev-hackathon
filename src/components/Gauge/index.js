import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";

const Gauge = (props) => {
  const { realizado, title } = props
  return (
    <div>
      <label >{title}</label>
      <ReactSpeedometer maxValue={130} value={realizado}/>
    </div>
  )
}

export default Gauge
