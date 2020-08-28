import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/services.scss"

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
      <h2 className="section-title">Nasza Oferta</h2>
      <div className="services-center section-center">
        {services.map((item) => {
          return (
            <div className="service" key={item.contentfulid}>
              <Image fluid={item.image.fluid} className="service-img" />
              <div className="service-info">
                <h3 className="service-title">{item.title}</h3>
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
