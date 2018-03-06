import React, {Component} from 'react'
import Gauge from '../Gauge'
import Header from '../Header'

class Goals extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dashboard : []
    }
  }
  componentWillMount () {
    fetch('http://hack-backend.azurewebsites.net/api/obter-indicador-atual?usuarioSap=123456')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      this.setState({
        dashboard: myJson
      })
    }.bind(this));
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '50px'
        }}>
          <GaugeList dashboard={this.state.dashboard} />
        </div>
      </div>

    )
  }
}

const GaugeList = ({dashboard}) => {
  return dashboard.map((item, index) => {
    return <Gauge key={`Gauge_${index}`} title={item.nomeMeta} realizado={item.realizado}/>
  })
}
export default Goals
