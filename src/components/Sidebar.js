import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { CgClose } from "react-icons/cg"
import "../styles/sidebar.scss"
import Wave from "../components/Wave"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const d =
    "M-3.48,40.75 C116.05,57.53 268.09,27.93 500.22,47.66 L499.07,150.00 L0.00,150.00 Z"
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="sidebar-close-btn" onClick={toggleSidebar}>
        <CgClose></CgClose>
      </button>
      <Wave className="sidebar-wave" value={d} />
      <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
      <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
    </aside>
  )
}

export default Sidebar
