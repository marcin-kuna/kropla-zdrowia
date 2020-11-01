import React from "react"
import "../styles/testimonials.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Drop from "../assets/images/drop.svg"
import TestimonialsWave from "../assets/images/testimonialsWave.svg"

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

  return (
    <section className="testimonials section">
      <h2 className="section-title testimonials-title">Opinie o nas</h2>
      <div className="testimonials-center section-center">
        <div
          className="testimonial-container"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1200"
        >
          {testimonials.map((item, index) => {
            return (
              <div
                className={`testimonial ${
                  index === value && "testimonial-active"
                }`}
                key={item.contentfulid}
              >
                <p className="testimonial-text">{item.testimonial}</p>
                <img src={Drop} className="testimonial-drop" alt="" />
                <p className="testimonial-name">{item.name}</p>
              </div>
            )
          })}
        </div>
        <div className="testimonial-btns">
          {testimonials.map((item, index) => {
            return (
              <div
                className="testimonial-btn-container"
                key={item.contentfulid}
                data-sal="slide-down"
                data-sal-easing="ease"
                data-sal-duration="1200"
              >
                <button
                  onClick={() => {
                    setValue(index)
                  }}
                  className={`testimonial-btn ${
                    index === value && "testimonial-active-btn"
                  }`}
                  aria-label="Testimonial"
                >
                  <div className="testimonial-img-container">
                    <Image
                      fluid={item.image.fluid}
                      className="testimonial-img"
                    />
                    <div className="testimonial-img-bg"></div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <img src={TestimonialsWave} alt="" className="testimonials-wave" />
    </section>
  )
}

export default Testimonials
