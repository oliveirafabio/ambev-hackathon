import React from 'react'
import Header from '../Header'
import SaladUI from 'salad-ui'
const chartData = [
  {time: new Date('1990-01-02'), value: 1231},
  {time: new Date('1990-01-20'), value: 900},
  {time: new Date('1990-04-02'), value: 1000}
];


const Timeline = (props) => {
  return (
    <div className='App'>
      <Header />
      <SaladUI.Chart.Area
  width={900}
  height={300}
  labelTemplate={data=>`A linha estava operando a ${data.value} nesse horario`}
  data={chartData}
/>
    </div>
  )
}

export default Timeline
