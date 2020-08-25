import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  {
    file(relativePath: { eq: "hero-3.jpg" }) {
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
        <h3>Sport – Przygoda – Wypoczynek</h3>
        <SocialLinks />
      </div>
    </BackgroundImage>
  )
}

export default Hero
