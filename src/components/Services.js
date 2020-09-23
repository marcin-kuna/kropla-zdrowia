import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/services.scss"
import Wave from "./Wave"
import { BiChevronsRight } from "react-icons/bi"
import Ripple from "../components/Ripple"
import WaveSeparator from "../assets/images/wave-long.svg"

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
          {/* <img src={WaveSeparator} alt="" className="wave-separator" /> */}
          {/* <div className="title-line"></div>
          <div className="title-text">
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing</span>
            <span>Dolor sit amet</span>
          </div> */}
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
                {/* <div className="separator"></div> */}
                <p className="service-description">
                  {item.description.description}
                </p>
              </div>
              <div
                className="services-btn-ripple-container"
                data-sal="zoom-in"
                // data-sal-delay="500"
                data-sal-easing="ease"
                data-sal-duration="1500"
              >
                <Link to={item.link} className="btn-round services-btn-round">
                  <BiChevronsRight className="btn-round-icon"></BiChevronsRight>
                </Link>
                <Ripple className="services-ripple-bg" />
              </div>
            </div>
          )
        })}
      </div>
      <Wave className="services-wave" value={d} />
    </section>
  )
}

export default Services
