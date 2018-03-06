import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Ambev</h1>
      <div>
        <Link to="/" className='link'>Home</Link>
        <Link to="/goals" className='link'>Goals</Link>
        <Link to="/timeline" className='link'>Timeline</Link>
      </div>

    </header>
  )
}

export default Header
