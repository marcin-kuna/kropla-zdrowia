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
      <button className="close-btn" onClick={toggleSidebar}>
        <CgClose></CgClose>
      </button>

      <Wave className="sidebar-wave" value={d} />
      {/* <div>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
            }}
          >
            <path
              d="M-2.31,28.91 C232.11,20.03 264.62,79.24 501.37,59.50 L499.07,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#1a6aff" }}
            ></path>
          </svg>
        </div> */}
      <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
      <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
    </aside>
  )
}

export default Sidebar
