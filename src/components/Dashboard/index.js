import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";


const Dashboard = (props) => {
  const [brasil, fabrica, linha] = props.valores
  if(props.valores.length > 0) {
    return (
      <div style={{display: 'flex'}}>
      <ReactSpeedometer maxValue={brasil.Meta} value={brasil.Realizado}/>
      <ReactSpeedometer maxValue={fabrica.Meta} value={fabrica.Realizado}/>
      <ReactSpeedometer maxValue={linha.Meta} value={linha.Realizado}/>
      </div>

    )
  } else {
    return (
      'aguarde as informações'
    )
  }

}

export default Dashboard
