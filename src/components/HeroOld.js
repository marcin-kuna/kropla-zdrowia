import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import BackgroundImage from "gatsby-background-image"
import WaveUnderline from "../assets/images/wave-long.svg"
import { GoPrimitiveDot } from "react-icons/go"

const query = graphql`
  {
    file(relativePath: { eq: "test-2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const HeroOld = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag="section"
      fluid={fluid}
      className="hero"
      backgroundColor={`#041329`}
    >
      <div className="hero-center">
        <div className="blue-dot"></div>
        <h1>Kropla Zdrowia</h1>
        <h3>
          Sport <GoPrimitiveDot className="hero-sun"></GoPrimitiveDot> Przygoda{" "}
          <GoPrimitiveDot className="hero-sun"></GoPrimitiveDot> Wypoczynek
        </h3>
        {/* <div className="hero-line"></div> */}
        {/* <img src={WaveUnderline} alt="" className="wave-underline" /> */}
        {/* <SocialLinks /> */}
      </div>
      <div style={{ height: "80px", overflow: "hidden" }} className="hero-wave">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#08f" }}
          ></path>
        </svg>
      </div>
      <div
        style={{ height: "90px", overflow: "hidden" }}
        className="hero-wave-under"
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>
      {/* <SocialLinks /> */}
    </BackgroundImage>
  )
}

export default HeroOld
