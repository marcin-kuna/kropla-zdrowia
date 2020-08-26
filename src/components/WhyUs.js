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
  const { title, description, icon } = informations[value]
  return (
    <section className="about-minisection section">
      <article>
        <h2>Dlaczego My?</h2>
        <div className="btn-container">
          {informations.map((item, index) => {
            return (
              <button
                key={item.contentfulid}
                onClick={() => setValue(index)}
                className={`about-btn ${index === value && "about-btn-active"}`}
              >
                {item.title}
              </button>
            )
          })}
        </div>
        <div className="about-info">
          <Image fluid={icon.fluid} className="about-icon" />
          <p className="about-text">{description}</p>
        </div>
      </article>
      <button>
        <Link to="/o-nas">Więcej</Link>
      </button>
    </section>
  )
}

export default WhyUs
