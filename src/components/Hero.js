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
import Drop from "../assets/images/drop3.svg"
import { HiChevronDown } from "react-icons/hi"
import scrollTo from "gatsby-plugin-smoothscroll"
import SectionWaveTop from "../assets/images/wave (10).svg"
import SectionWaveBottom from "../assets/images/wave (18).svg"

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
        <a
          onClick={() => scrollTo("#about")}
          className="hero-btn"
          data-sal="slide-down"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <img src={Drop} className="hero-btn-drop" />
          <HiChevronDown className="hero-btn-icon" />
        </a>
      </div>
      {/* <Wave className="hero-wave hero-wave-top" value={d} />
      <Wave className="hero-wave hero-wave-bottom" value={d} /> */}
      <SocialLinks />
      <img
        src={SectionWaveTop}
        alt=""
        className="section-wave section-wave-top"
      />
      <img
        src={SectionWaveBottom}
        alt=""
        className="section-wave section-wave-bottom"
      />
    </section>
  )
}

export default Hero
