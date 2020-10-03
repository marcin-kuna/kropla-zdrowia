import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/hero.scss"
import Image from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SocialLinks from "../constants/socialLinks"
import Drop from "../assets/images/drop3.svg"
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
            className="wave-separator"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            delectus nihil eius possimus quod architecto porro cumque assumenda
            soluta culpa.
          </p>
        </div>
        <a
          onClick={() => scrollTo("#about")}
          className="hero-btn"
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <img src={Drop} className="hero-btn-drop" />
          <HiChevronDown className="hero-btn-icon" />
        </a>
      </div>
      <SocialLinks />
      <img src={HeroWaveTop} alt="" className="hero-wave hero-wave-top" />
      <img src={HeroWaveBottom} alt="" className="hero-wave" />
    </section>
  )
}

export default Hero
