import React from "react"
import SocialLinks from "../constants/socialLinks"
import "../styles/footer.scss"
import Logo from "../assets/images/logoWhite.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center section-center">
        <img src={Logo} alt="" className="footer-logo" />
        <div className="footer-info">
          <p>Kropla Zdrowia</p>
          <p>ul. Focha 13/21</p>
          <p>26-600 Radom</p>
          <p>(+48) 603 952 902</p>
        </div>
        <div className="footer-info">
          <p>NIP: 796-226-16-70</p>
          <p>REGON: 672877464</p>
          <p>Rejestr Organizatorów Turystyki:</p>
          <p>Nr wpisu 2307 | Nr ewidencyjny 26131</p>
          <p>Konto: 84 2490 0005 0000 4600 6531 1730</p>
        </div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
      </div>
      <div className="footer-copy">
        <p>
          <span>Kropla Zdrowia</span>&copy;{new Date().getFullYear()}
        </p>{" "}
        <p>|</p>
        <p>Wszelkie prawa zastrzeżone</p>
      </div>
    </footer>
  )
}

export default Footer
