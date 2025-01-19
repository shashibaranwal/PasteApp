import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="flex flex-raw gap-5 justify-center m-2">
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
