import React, {Component} from 'react'
import Header from '../Header'

class Leaderboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anual : [],
      mensal : [],
      semanal : []
    }
    this.fetchanual = this.fetchanual.bind(this)
    this.fetchmensal = this.fetchmensal.bind(this)
    this.fetchsemanal = this.fetchsemanal.bind(this)
  }

  componentWillMount () {
    this.fetchanual();
    this.fetchmensal();
    this.fetchsemanal();
  }

  render() {
    return (

      <div className='App'>
        <Header />
        <div className='box' >
          <div className='board'>
            <h2>2018</h2>

            <Boardlist dashboard={this.state.anual} />
          </div>
          <div className='board'>
            <h2>Março</h2>
            <Boardlist dashboard={this.state.mensal} />
          </div>
        <div className='board'>
          <h2>01/03/2018 à 07/03/2018</h2>
          <Boardlist dashboard={this.state.semanal} />
        </div>

        </div>
      </div>
    )
  }

  fetchanual(){
    fetch('http://hack-backend.azurewebsites.net/api/obter-valores-anual-usuario?usuarioSap=123456')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.setState({
          anual: myJson
        })
      }.bind(this));
  }

  fetchmensal(){
    fetch('http://hack-backend.azurewebsites.net/api/obter-valores-mensal-usuario?usuarioSap=123456')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.setState({
          mensal: myJson
        })
      }.bind(this));
  }

  fetchsemanal(){
    fetch('http://hack-backend.azurewebsites.net/api/obter-valores-semanal-usuario?usuarioSap=123456')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.setState({
          semanal: myJson
        })
      }.bind(this));
  }
}

const Boardlist = ({dashboard}) => {
  return (
    <table className='tabela'>
      <tbody>
    <tr>
      <th>Posição</th>
      <th>Descrição</th>
      <th>Percentual</th>
    </tr>
    {dashboard.map(function(item, key) {
             return (
                <tr key = {key}>
                    <td>{item.posicao}</td>
                    <td>{item.descricao}</td>
                    <td>{item.percentual}</td>
                    <td>{item.linhausuariologado}</td>
                </tr>
              )

           })}</tbody>
     </table>
  )
}

export default Leaderboard
