import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.svg'

const Header = () => {
  return (
    <header className="App-header">
      <img className='App-logo' src={Logo} alt='Ambev - Juntos por um mundo melhor'/>
      <div style={{paddingTop: '30px'}}>
        <Link to="/" className='link'>Home</Link>
        <Link to="/goals" className='link'>Goals</Link>
        <Link to="/timeline" className='link'>Timeline</Link>
      </div>

    </header>
  )
}

export default Header
