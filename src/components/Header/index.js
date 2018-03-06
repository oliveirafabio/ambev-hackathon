import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Ambev</h1>
      <Link to="/">Home</Link>
      <Link to="/goals">Goals</Link>
    </header>
  )
}

export default Header
