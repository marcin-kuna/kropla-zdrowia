import React from "react"
import logo from "../assets/images/logo-navbar.svg"
import { CgMenuRightAlt } from "react-icons/cg"
import PageLinks from "../constants/links"
import "../styles/navbar.scss"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo Kropli Zdrowia" className="nav-logo" />
          <button
            type="button"
            className="nav-toggle-btn"
            onClick={toggleSidebar}
          >
            <CgMenuRightAlt></CgMenuRightAlt>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
