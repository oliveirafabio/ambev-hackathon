import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";

const Gauge = (props) => {
  const { realizado } = props
  return (
    <ReactSpeedometer maxValue={130} value={realizado}/>
  )
}

export default Gauge
