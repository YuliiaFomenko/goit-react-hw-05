import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css"

const Header = () => {

  const setActiveClass = ({isActive})=> {
    return clsx(s.link, isActive && s.active)
  }

  return (
    <header>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Header