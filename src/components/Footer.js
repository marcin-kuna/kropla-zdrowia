import React from "react"
import SocialLinks from "../constants/socialLinks"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>Kropla Zdrowia</span> Wszelkie prawa zastrzeżone
        </h4>
      </div>
    </footer>
  )
}

export default Footer
