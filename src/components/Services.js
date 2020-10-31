import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/services.scss"
import WaveSeparator from "../assets/images/wave-long.svg"
import { HiChevronRight } from "react-icons/hi"
import ServicesWave from "../assets/images/servicesWave.svg"

const query = graphql`
  {
    allContentfulServices(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        title
        link
        contentfulid
        description {
          description
        }
        image {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Services = () => {
  const {
    allContentfulServices: { nodes: services },
  } = useStaticQuery(query)

  return (
    <section className="services section">
      <div className="services-center section-center">
        <h2 className="services-title section-title">Nasza oferta</h2>
        {services.map((item) => {
          return (
            <div className="service" key={item.contentfulid}>
              <div
                className="service-img-container"
                data-sal="zoom-in"
                data-sal-delay="2500"
                data-sal-easing="ease"
                data-sal-duration="1500"
              >
                <Image fluid={item.image.fluid} className="service-img" />
              </div>

              <div
                className="service-info"
                data-sal="zoom-out"
                data-sal-delay="1500"
                data-sal-easing="ease"
                data-sal-duration="1500"
              >
                <h3 className="service-title">{item.title}</h3>
                <img
                  src={WaveSeparator}
                  alt=""
                  className="service-info-separator"
                />
                <p className="service-description">
                  {item.description.description}
                </p>
                <Link
                  to={item.link}
                  className="spinning-btn service-spinning-btn"
                  data-sal="zoom-in"
                  data-sal-delay="600"
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
                      <textPath xlinkHref="#curve">
                        {`Pełna oferta – ${item.link} –`}
                      </textPath>
                    </text>
                  </svg>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <img src={ServicesWave} alt="" className="services-wave" />
    </section>
  )
}

export default Services
