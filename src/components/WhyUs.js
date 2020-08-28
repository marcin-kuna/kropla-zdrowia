import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "../styles/whyus.scss"

const query = graphql`
  {
    allContentfulWhyUs(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        description {
          description
        }
        description2
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
    description2,
  } = informations[value]

  return (
    <section className="about section">
      <h2 className="section-title">
        Dlaczego<span>Kropla Zdrowia?</span>
      </h2>
      {/* <div className="underline"></div> */}
      <div className="about-center">
        <div className="btn-container">
          {informations.map((item, index) => {
            return (
              <button
                key={item.contentfulid}
                onClick={() => setValue(index)}
                className={`about-btn ${index === value && "active-btn"}`}
              >
                {item.title}
                <div className="dot">
                  <div className="minidot"></div>
                </div>
              </button>
            )
          })}
        </div>
        <div className="about-info">
          <div className="text-container">
            <p className="description-top">{description}</p>
            <p className="description-bottom">{description2}</p>
          </div>
          <div className="image-container">
            {informations.map((item, index) => {
              return (
                <Image
                  key={item.contentfulid}
                  fluid={item.image.fluid}
                  className={`about-image ${index === value && "active-image"}`}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                  }}
                />
              )
            })}
          </div>
          {/* <p className="about-text">{description}</p> */}
        </div>
      </div>
      <Link to="/o-nas" className="btn center-btn">
        Więcej
      </Link>
    </section>
  )
}

export default WhyUs
