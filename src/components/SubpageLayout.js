import React from "react"
import BackgroundImage from "gatsby-background-image"
import HeaderWaveTop from "../assets/images/headerWaveTop.svg"
import HeaderWaveBottom from "../assets/images/headerWaveBottom.svg"
import FooterWave from "../assets/images/footerWave.svg"
import WaveSeparator from "../assets/images/wave-long.svg"

const SubpageLayout = ({ image, heading, children }) => {
  return (
    <>
      <BackgroundImage Tag="section" className="page-header" fluid={image}>
        <div className="page-header-container">
          <h1
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1500"
          >
            {heading}
          </h1>
          <img
            src={WaveSeparator}
            alt=""
            className="page-header-separator"
            data-sal="zoom-in"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="1500"
          />
        </div>
        <img
          src={HeaderWaveTop}
          alt=""
          className="header-wave header-wave-top"
        />
        <img src={HeaderWaveBottom} alt="" className="header-wave" />
      </BackgroundImage>
      <section className="section page-section">
        <div className="section-center">{children}</div>
        <img src={FooterWave} alt="" className="footer-wave" />
      </section>
    </>
  )
}

export default SubpageLayout
