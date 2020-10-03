import React from "react"
import logo from "../assets/images/logo-navbar.svg"
import { CgMenuRightAlt } from "react-icons/cg"
import PageLinks from "../constants/links"
import "../styles/navbar.scss"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo Kropli Zdrowia" className="navbar-logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <CgMenuRightAlt></CgMenuRightAlt>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
