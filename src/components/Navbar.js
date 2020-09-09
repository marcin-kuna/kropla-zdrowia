import React from "react"
import logo from "../assets/images/logo-3.png"
import { CgMenuRightAlt } from "react-icons/cg"
import PageLinks from "../constants/links"
import "../styles/navbar.scss"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo Kropli Zdrowia - niebieska kropla" />
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
