import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { CgClose } from "react-icons/cg"
import "../styles/sidebar.scss"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <CgClose></CgClose>
      </button>
      <div>
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
