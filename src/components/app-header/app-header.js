import React from 'react'
import { Link } from 'react-router-dom'

import './app-header.css'

const AppHeader = () => {
  return (
    <header className="container">
      <ul className="nav justify-content-end container">
        <li className="nav-item">
          <Link 
            to="/"
            className="nav-link">Posts</Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/new"
            className="nav-link">New</Link>
        </li>
      </ul>
    </header>
  );
}

export default AppHeader
