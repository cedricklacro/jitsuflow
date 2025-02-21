import './HeaderNavList.scss';
import { NavLink } from "react-router-dom";

function HeaderNavList({className, onClick = () => {} }) {
  return (
    <nav className={`nav ${className}`}>
      <NavLink to="/" className="nav__link" onClick={onClick}>
        Home
      </NavLink>
      <NavLink to="/profile" className="nav__link" onClick={onClick}>
        Profile
      </NavLink>
      <NavLink to="/jitsujournal" className="nav__link" onClick={onClick}>
        Jitsu Journal
      </NavLink>
      <NavLink to="/flowbuilder" className="nav__link" onClick={onClick}>
        Flow Builder
      </NavLink>
      <NavLink to="/billing" className="nav__link" onClick={onClick}>
        Billing
      </NavLink>
      <NavLink to="/log-out" className="nav__link" onClick={onClick}>
        Log out
      </NavLink>
    </nav>
  )
}

export default HeaderNavList
