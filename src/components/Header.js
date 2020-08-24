import React, { useState } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import "../styles/header.scss"

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          KROPLA
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <CgClose /> : <GiHamburgerMenu />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Start
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/o-nas" className="nav-links" onClick={closeMobileMenu}>
              O nas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/basen" className="nav-links" onClick={closeMobileMenu}>
              Basen
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/obozy" className="nav-links" onClick={closeMobileMenu}>
              Obozy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
