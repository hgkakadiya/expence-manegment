import React from 'react'
import './App.css';
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
  <div className="sidebars"><NavLink className='navLink' to="/" >Expense</NavLink></div>
 )
}

export default Sidebar;