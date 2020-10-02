import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "../styles/about.scss"
import { BiChevronsRight } from "react-icons/bi"
import Ripple from "../components/Ripple"
import Wave from "./Wave"
import { HiChevronRight } from "react-icons/hi"
import AboutWave from "../assets/images/wave (17).svg"

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
    <section className="about section" id="about">
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
                <span className="about-btn-title">{item.title}</span>
                <div className="about-btn-radio">
                  <div className="about-btn-radio-dot"></div>
                </div>
                {/* <Ripple className="about-ripple" /> */}
              </button>
            )
          })}
        </div>
        <div className="about-info">
          <div className="about-images-container">
            {informations.map((item, index) => {
              return (
                <div
                  className="about-img-container"
                  data-sal="slide-up"
                  // data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1200"
                >
                  <Image
                    key={item.contentfulid}
                    fluid={item.image.fluid}
                    className={`about-image ${
                      index === value && "active-image"
                    }`}
                  />
                </div>
              )
            })}
          </div>
          <div
            className="text-container"
            data-sal="fade"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="1500"
          >
            <p className={`description description-${value}`}>{description}</p>
          </div>
        </div>
        {/* <Link to="/o-nas" className="btn-round">
          <CgArrowLongRight></CgArrowLongRight>
        </Link> */}
      </div>
      {/* <div
        className="about-btn-ripple-container"
        data-sal="zoom-in"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        <Link to="/o-nas" className="btn-round about-btn-round">
          <BiChevronsRight className="btn-round-icon"></BiChevronsRight>
        </Link>
        <Ripple className="about-ripple-bg" />
      </div> */}
      <Link to="/o-nas" className="section-btn section-btn-about">
        Więcej o nas
        <HiChevronRight className="section-btn-icon" />
      </Link>
      {/* <Wave className="about-wave" value={d} /> */}
      <img src={AboutWave} alt="" className="about-wave" />
    </section>
  )
}

export default WhyUs
