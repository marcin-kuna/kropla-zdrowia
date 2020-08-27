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
        icon {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        description
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
  const { description, icon } = informations[value]
  console.log(informations.contentfulid)
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
          <p className="about-text">{description}</p>
          <div className="image-container">
            {informations.map((item, index) => {
              return (
                <Image
                  key={item.contentfulid}
                  fluid={item.icon.fluid}
                  className={`about-icon ${index === value && "active-icon"}`}
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
          {/* <Image fluid={icon.fluid} className="about-icon" /> */}
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
