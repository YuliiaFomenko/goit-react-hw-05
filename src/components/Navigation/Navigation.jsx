import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Navigation.module.css";

const Navigation = () => {

  const setActiveClass = ({isActive})=> {
    return clsx(s.link, isActive && s.active)
  }

  return (
    
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    
  );
}

export default Navigation;