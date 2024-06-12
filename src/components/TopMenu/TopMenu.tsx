import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

export default function TopMenu() {
  return (
    <nav className="top-menu">
      <ul className="top-menu-list">
        <li className='top-menu-list-element'><Link to="/">List of festivals</Link></li>
      </ul>
    </nav>
  )
}
