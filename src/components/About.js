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
    image,
  } = informations[value]

  return (
    <section className="about section" id="about">
      <h2 className="about-title section-title">Dlaczego My?</h2>
      <div className="about-center section-center">
        <div className="btn-container">
          {informations.map((item, index) => {
            return (
              <button
                key={item.contentfulid}
                onClick={() => setValue(index)}
                className={`about-btn ${index === value && "active-btn"}`}
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
          <div className="about-images-container">
            {informations.map((item, index) => {
              return (
                <div
                  className="about-img-container"
                  data-sal="slide-down"
                  // data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1200"
                >
                  <Image
                    key={item.contentfulid}
                    fluid={item.image.fluid}
                    className={`about-image ${
                      index === value && "active-image"
                    }`}
                  />
                </div>
              )
            })}
          </div>
          <div
            className="text-container"
            data-sal="zoom-in"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="1500"
          >
            <p className={`description description-${value}`}>{description}</p>
          </div>
        </div>
      </div>
      <Link
        to="/o-nas"
        className="section-btn section-btn-about"
        data-sal="fade"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        Więcej o nas
        <HiChevronRight className="section-btn-icon" />
      </Link>
      <img src={AboutWave} alt="" className="about-wave" />
    </section>
  )
}

export default WhyUs
