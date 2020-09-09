import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "../styles/whyus.scss"
import { CgArrowLongRight } from "react-icons/cg"
import Ripple from "../components/Ripple"
import Wave from "./Wave"

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
  const d =
    "M-0.90,107.85 C192.66,43.71 312.30,148.31 503.61,95.02 L500.00,150.00 L0.00,150.00 Z"

  return (
    <section className="about section">
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
                {item.title}
                <Ripple className="about-ripple" />
                {/* <div className="dot">
                  <div className="minidot"></div>
                </div> */}
              </button>
            )
          })}
        </div>
        <div className="about-info">
          <div className="image-container">
            {informations.map((item, index) => {
              return (
                <Image
                  key={item.contentfulid}
                  fluid={item.image.fluid}
                  className={`about-image ${index === value && "active-image"}`}
                  style={
                    {
                      // position: "absolute",
                      // top: "0",
                      // left: "0",
                      // width: "100%",
                    }
                  }
                />
              )
            })}
          </div>
          <div className="text-container">
            <p className={`description description-${value}`}>{description}</p>
          </div>
        </div>
        {/* <Link to="/o-nas" className="btn-round">
          <CgArrowLongRight></CgArrowLongRight>
        </Link> */}
      </div>

      <Ripple className="about-ripple-bg" />
      <Link to="/o-nas" className="btn-round about-btn-round">
        <CgArrowLongRight></CgArrowLongRight>
      </Link>
      <Wave className="about-wave" value={d} />
    </section>
  )
}

export default WhyUs
