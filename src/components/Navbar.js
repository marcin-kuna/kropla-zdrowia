import React from "react"
import logo from "../images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import "../styles/navbar.scss"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo Kropli Zdrowia" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
