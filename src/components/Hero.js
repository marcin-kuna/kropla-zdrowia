import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/hero.scss"
import Image from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Drop from "../assets/images/drop.svg"
import { HiChevronDown } from "react-icons/hi"
import scrollTo from "gatsby-plugin-smoothscroll"
import HeroWaveTop from "../assets/images/heroWaveTop.svg"
import HeroWaveBottom from "../assets/images/heroWaveBottom.svg"
import WaveSeparator from "../assets/images/wave-long.svg"

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
          fluid(maxWidth: 4000, quality: 100) {
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

  return (
    <section className="hero">
      <Slider {...settings} className="hero-slider">
        {backgrounds.map((item) => {
          return (
            <Image
              fluid={item.childImageSharp.fluid}
              className="hero-image"
              key={item.childImageSharp.id}
              alt=""
            />
          )
        })}
      </Slider>
      <div className="hero-center">
        <div className="hero-text">
          <h1
            className="hero-text-heading"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1500"
          >
            Obozy i
          </h1>
          <h1
            className="hero-text-heading"
            data-sal="fade"
            data-sal-delay="600"
            data-sal-easing="ease"
            data-sal-duration="1500"
          >
            Zajęcia sportowe
          </h1>
          <img
            src={WaveSeparator}
            alt=""
            className="hero-text-separator"
            data-sal="zoom-in"
            data-sal-delay="900"
            data-sal-easing="ease"
            data-sal-duration="1500"
          />
          <p
            className="hero-text-para"
            data-sal="fade"
            data-sal-delay="900"
            data-sal-easing="ease"
            data-sal-duration="1500"
          >
            Nasze obozy to sport, przygoda i wypoczynek, to szerokie spektrum
            zajęć sportowych, gier i zabaw integracyjnych i terenowych, to
            wykwalifikowana i zaangażowana kadra pozytywnie zakręconych
            instruktorów i wychowawców.
          </p>
        </div>
        <button
          onClick={() => scrollTo("#about")}
          className="hero-btn"
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="1500"
          aria-label="Down"
        >
          <img src={Drop} className="hero-btn-drop" alt="" />
          <HiChevronDown className="hero-btn-icon" />
        </button>
      </div>
      <img src={HeroWaveTop} alt="" className="hero-wave hero-wave-top" />
      <img src={HeroWaveBottom} alt="" className="hero-wave" />
    </section>
  )
}

export default Hero
