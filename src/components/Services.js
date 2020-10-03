import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/services.scss"
import { BiChevronsRight } from "react-icons/bi"
import Ripple from "../components/Ripple"
// import WaveSeparator from "../assets/images/wave-test-5.svg"
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
          fluid {
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
  const { title, description, image, link } = services
  const d =
    "M-2.03,75.29 C185.89,203.57 193.79,-59.90 500.22,114.76 L500.00,150.00 L0.00,150.00 Z"

  return (
    <section className="services section">
      <div className="services-center section-center">
        <div className="title-container">
          <h2 className="services-title section-title">Nasza oferta</h2>
        </div>
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
                <img src={WaveSeparator} alt="" className="wave-separator" />
                <p className="service-description">
                  {item.description.description}
                </p>
                <Link
                  to={item.link}
                  className="section-link-test"
                  data-sal="zoom-in"
                  data-sal-delay="1500"
                  data-sal-easing="ease"
                  data-sal-duration="1500"
                >
                  <div className="section-link-test-inner">
                    <HiChevronRight className="section-btn-icon-test" />
                  </div>
                  <svg viewBox="0 0 200 200" className="circle-test">
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
