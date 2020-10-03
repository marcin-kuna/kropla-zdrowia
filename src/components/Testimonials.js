import React from "react"
import "../styles/testimonials.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Wave from "./Wave"
// import Ripple from "./Ripple"
import Drop from "../assets/images/drop3.svg"
import TestimonialsWave from "../assets/images/wave (11).svg"

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
                {/* <Ripple className="testimonial-ripple" /> */}
                <img src={Drop} className="testimonials-drop" />
                <h4 className="testimonial-name">{item.name}</h4>
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
                // data-sal-delay="300"
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
