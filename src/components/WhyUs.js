import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "../styles/whyus.scss"
import { FiChevronRight } from "react-icons/fi"
import { CgArrowLongRight } from "react-icons/cg"

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
    <section className="about">
      <div className="wave-top">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#08f" }}
          ></path>
        </svg>
      </div>
      <h2 className="section-title">
        Dlaczego<span>Kropla Zdrowia?</span>
      </h2>
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
            <Link to="/o-nas" className="btn-arrow">
              <CgArrowLongRight></CgArrowLongRight>
            </Link>
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
      <Link to="/o-nas" className="btn-round">
        <FiChevronRight className="btn-round-icon"></FiChevronRight>
      </Link>
      <div className="wave-top">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-20.09,106.88 C150.00,150.00 273.36,25.95 526.75,114.76 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#f3f5f8" }}
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default WhyUs
