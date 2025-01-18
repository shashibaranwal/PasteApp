import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="flex flex-raw gap-5">
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/pastes'>
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
