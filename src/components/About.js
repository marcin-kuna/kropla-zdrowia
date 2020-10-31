import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "../styles/about.scss"
import { HiChevronRight } from "react-icons/hi"
import AboutWave from "../assets/images/aboutWave.svg"

const query = graphql`
  {
    allContentfulWhyUs(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        title
        image {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        description {
          description
        }

        contentfulid
        id
      }
    }
  }
`

const WhyUs = () => {
  const {
    allContentfulWhyUs: { nodes: informations },
  } = useStaticQuery(query)
  const [value, setValue] = React.useState(1)
  const {
    description: { description },
  } = informations[value]

  return (
    <section className="about section" id="about">
      <h2 className="about-title section-title">Dlaczego My?</h2>
      <div className="about-center section-center">
        <div className="about-btn-container">
          {informations.map((item, index) => {
            return (
              <button
                key={item.contentfulid}
                onClick={() => setValue(index)}
                className={`about-btn ${index === value && "about-btn-active"}`}
              >
                <span className="about-btn-title">{item.title}</span>
                <div className="about-btn-radio">
                  <div className="about-btn-radio-dot"></div>
                </div>
              </button>
            )
          })}
        </div>
        <div className="about-info">
          <div className="about-info-images">
            {informations.map((item, index) => {
              return (
                <div
                  key={item.contentfulid}
                  className="about-image-container"
                  data-sal="slide-down"
                  data-sal-easing="ease"
                  data-sal-duration="1200"
                >
                  <Image
                    fluid={item.image.fluid}
                    className={`about-image ${
                      index === value && "about-image-active"
                    }`}
                  />
                </div>
              )
            })}
          </div>
          <div
            className="about-description-container"
            data-sal="zoom-in"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="1500"
          >
            <p className={`about-description about-description-${value}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
      <Link
        to="/o-nas"
        className="spinning-btn about-spinning-btn"
        data-sal="zoom-in"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <div className="spinning-btn-inner">
          <HiChevronRight className="spinning-btn-icon" />
        </div>
        <svg viewBox="0 0 200 200" className="spinning-btn-svg">
          <path
            id="curve"
            d="M 175, 100 a75,75 0 1,1 0,-1 z"
            fill="transparent"
          />
          <text>
            <textPath xlinkHref="#curve">Więcej o nas Więcej o nas </textPath>
          </text>
        </svg>
      </Link>
      <img src={AboutWave} alt="" className="about-wave" />
    </section>
  )
}

export default WhyUs
