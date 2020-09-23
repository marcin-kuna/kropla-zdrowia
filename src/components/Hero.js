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

  const d =
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
        <div
          className="hero-ripple-container"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <Ripple className="hero-ripple" />
        </div>
        <h1>Kropla Zdrowia</h1>
        <h3>
          Sport<GoPrimitiveDot className="dot-separator"></GoPrimitiveDot>
          Przygoda
          <GoPrimitiveDot className="dot-separator"></GoPrimitiveDot>Wypoczynek
        </h3>
      </div>
      <Wave className="hero-wave hero-wave-top" value={d} />
      <Wave className="hero-wave hero-wave-bottom" value={d} />
      <SocialLinks />
      {/* <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255, 255, 255, 0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(0, 58, 166, 1)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(26, 106, 255, 0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#1a6aff" />
          </g>
        </svg>
      </div> */}
    </section>
  )
}

export default Hero
