import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Background from './background.jpg'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      password: ''
    }
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin({state}) {
    const data = {
      senha: state.password,
      CodigoSap: state.user
    }

    fetch('http://hack-backend.azurewebsites.net/api/atenticar-usuario', {
       method: "POST",
       headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
   })
      .then(function(res){  return res.json(); })
      .then(function(data){
        if(data.tipoUsuario === 0) {
          this.props.history.push('/')
        } else {
          this.props.history.push('/goals')
        }
      }.bind(this))
      .catch(function(res){ console.log(res) })

  }

  render() {
    return (
      <div style={{display:'flex'}}>
        <div  style={{width:'calc(100% - 400px)', height:'100%'}}>
          <img src={Background}  style={{width:'100%'}} />
        </div>
        <div className='login'>
          <form>
            <div className='form-control'>
              <label>Usuário</label>
              <input name='user' id='user' onChange={(evt) => this.setState({user : evt.target.value})}/>
            </div>
            <div className='form-control'>
              <label>Senha</label>
              <input name='password' id='password' type='password' onChange={(evt) => this.setState({password : evt.target.value})}/>
            </div>
            <button
              type='button'
              onClick={() => this.onLogin(this)}
              className='botao'
            >
            Log-in
          </button>
          </form>

        </div>
      </div>
    )
  }
}


export default withRouter(Login)
