import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import "../styles/basen.scss"
import Image from "gatsby-image"
import WaveSeparator from "../assets/images/wave-long.svg"
import { MdLocationOn, MdChildCare, MdSchedule } from "react-icons/md"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import SocialLinks from "../constants/socialLinks"
import Head from "../components/Head"

const query = graphql`
  {
    file(relativePath: { eq: "basen.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulBaseny(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        contentfulid
        name
        schedule {
          content {
            content {
              value
            }
          }
        }
        address
        age
        duration
        logo {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        price
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "gallery-pool" } }) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 270, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
          full: fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Basen = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
    allContentfulBaseny: { nodes: baseny },
    allFile: { nodes: images },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="Basen" />
      <SubpageLayout image={fluid} heading="Oferta – Basen">
        <h2 className="pool-title section-title">Szkółka pływacka</h2>
        <h2 className="pool-title section-title">Dla dzieci</h2>
        <section className="pool-info-container">
          {baseny.map((item) => {
            return (
              <div
                className="pool-info"
                key={item.contentfulid}
                data-sal="fade"
                data-sal-easing="ease"
                data-sal-duration="1500"
              >
                <div className="pool-info-logo-container">
                  <Image fluid={item.logo.fluid} className="pool-info-logo" />
                </div>
                <div className="pool-info-text">
                  <h2>{item.name}</h2>
                  <img
                    src={WaveSeparator}
                    alt=""
                    className="pool-info-separator"
                  />
                  <h3>
                    <MdLocationOn className="pool-info-icon" />
                    {item.address}
                  </h3>
                  <h3>
                    <MdChildCare className="pool-info-icon" />
                    {item.age}
                  </h3>
                  <h3>
                    <FaRegMoneyBillAlt className="pool-info-icon" />
                    {item.price} zł / {item.duration} min
                  </h3>
                  <h3>
                    <MdSchedule className="pool-info-icon" />
                    Plan zajęć
                  </h3>
                  <div className="pool-info-schedule">
                    {item.schedule.content.map((element, index) => {
                      return (
                        <p
                          key={index}
                          className={`${
                            element.content[0].value === "wolne miejsca"
                              ? `green`
                              : element.content[0].value === "brak miejsc"
                              ? `red`
                              : ""
                          }`}
                        >
                          {element.content[0].value}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </section>
        <section className="gallery-section-pool">
          <h2 className="section-title">Basen - Galeria</h2>
          <div>
            <Gallery
              images={images.map((item) => {
                return item.childImageSharp
              })}
            />
          </div>
        </section>
      </SubpageLayout>
      <SocialLinks styleClass="social-links-fixed" />
    </Layout>
  )
}

export default Basen
