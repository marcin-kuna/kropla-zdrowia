import React from "react"
import "../styles/testimonials.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Wave from "./Wave"
import Ripple from "./Ripple"

const query = graphql`
  {
    allContentfulTestimonials(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
        testimonial
        contentfulid
      }
    }
  }
`

const Testimonials = () => {
  const {
    allContentfulTestimonials: { nodes: testimonials },
  } = useStaticQuery(query)
  const [value, setValue] = React.useState(1)
  const { name, testimonial, image } = testimonials

  return (
    <section className="testimonials section">
      <h2 className="section-title testimonials-title">Opinie o nas</h2>
      <div className="testimonials-center section-center">
        <div className="testimonial-container">
          {testimonials.map((item, index) => {
            return (
              <div
                className={`testimonial ${
                  index === value && "testimonial-active"
                }`}
                key={item.contentfulid}
              >
                <p className="testimonial-text">{item.testimonial}</p>
                <Ripple className="testimonial-ripple" />
                <h4 className="testimonial-name">{item.name}</h4>
              </div>
            )
          })}
        </div>
        <div className="testimonial-btns">
          {testimonials.map((item, index) => {
            return (
              <div className="testimonial-btn-container">
                <button
                  key={item.contentfulid}
                  onClick={() => {
                    setValue(index)
                  }}
                  className={`testimonial-btn ${
                    index === value && "testimonial-active-btn"
                  }`}
                >
                  <div className="testimonial-img-container">
                    <Image
                      fluid={item.image.fluid}
                      className="testimonial-img"
                    />
                    <div className="testimonial-img-bg"></div>
                  </div>
                </button>
                {/* <h4 className="testimonial-name">{item.name}</h4> */}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
