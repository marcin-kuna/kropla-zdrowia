import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/hero.scss"
import Image from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GoPrimitiveDot } from "react-icons/go"
import SocialLinks from "../constants/socialLinks"
import Wave from "./Wave"
import Ripple from "./Ripple"

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  fade: true,
  autoplaySpeed: 8000,
  pauseOnHover: false,
}

const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "backgrounds" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
  }
`

const Hero = () => {
  const {
    allFile: { nodes: backgrounds },
  } = useStaticQuery(query)

  const d1 =
    "M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
  const d2 =
    "M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"

  return (
    <section className="hero">
      <Slider {...settings} className="hero-slider">
        {backgrounds.map((item) => {
          return (
            <Image
              fluid={item.childImageSharp.fluid}
              className="hero-image"
              key={item.childImageSharp.id}
            />
          )
        })}
      </Slider>
      <div className="hero-center">
        <Ripple className="hero-ripple" />
        <h1>Kropla Zdrowia</h1>
        <h3>
          Sport<GoPrimitiveDot className="dot-separator"></GoPrimitiveDot>
          Przygoda
          <GoPrimitiveDot className="dot-separator"></GoPrimitiveDot>Wypoczynek
        </h3>
      </div>
      <Wave className="hero-wave" value={d1} />
      <Wave className="hero-wave-under" value={d2} />
      {/* <SocialLinks /> */}
    </section>
  )
}

export default Hero
