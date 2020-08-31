import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import BackgroundImage from "gatsby-background-image"
import WaveUnderline from "../images/wave-long.svg"

const query = graphql`
  {
    file(relativePath: { eq: "hero-2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
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
        <h1>Kropla Zdrowia</h1>
        <h3>Sport / Przygoda / Wypoczynek</h3>
        {/* <div className="hero-line"></div> */}
        <img src={WaveUnderline} alt="" className="wave-underline" />
        <SocialLinks />
      </div>
    </BackgroundImage>
  )
}

export default Hero
