import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-slate-900">
      <NavLink to="/login">Log in</NavLink>
    </nav>
  )
}

export default Navigation
