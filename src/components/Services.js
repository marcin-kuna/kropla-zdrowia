import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// import "../styles/services.scss"
import "../styles/services-alt.scss"

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
  console.log(services)
  return (
    <section className="services section">
      {/* <div className="underline"></div> */}
      <div className="services-center">
        <div className="title-container">
          <h2 className="section-title">Nasza oferta</h2>
          <div className="title-line"></div>
          <div className="title-text">
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing</span>
            <span>Dolor sit amet</span>
          </div>
        </div>
        {services.map((item) => {
          return (
            <div className="service" key={item.contentfulid}>
              <Image fluid={item.image.fluid} className="service-img" />
              <div className="service-info">
                <h3 className="service-title">{item.title}</h3>
                {/* <div className="separator"></div> */}
                <p className="service-desc">{item.description.description}</p>
                <Link to={item.link} className="service-link">
                  Więcej
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
