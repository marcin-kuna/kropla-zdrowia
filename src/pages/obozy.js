import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import Image from "gatsby-image"
import WaveSeparator from "../assets/images/wave-long.svg"
import WaveSeparatorYellow from "../assets/images/wave-long-yellow.svg"
import "../styles/obozy.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  MdChildCare,
  MdLocationOn,
  MdSchedule,
  MdRestaurant,
} from "react-icons/md"
import {
  FaHome,
  FaRegMoneyBillAlt,
  FaBusAlt,
  FaRegQuestionCircle,
  FaAmbulance,
} from "react-icons/fa"
import CampsWaveDark from "../assets/images/campsWaveDark.svg"
import CampsWaveLight from "../assets/images/campsWaveLight.svg"
import SocialLinks from "../constants/socialLinks"
import Head from "../components/Head"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

const query = graphql`
  {
    file(relativePath: { eq: "obozy-test8.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulObozy(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        accommodation {
          content {
            content {
              value
            }
          }
        }
        availability {
          content {
            content {
              value
            }
          }
        }
        date {
          content {
            content {
              value
            }
          }
        }
        description {
          description
        }
        food {
          content {
            content {
              value
            }
          }
        }
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        location {
          content {
            content {
              value
            }
          }
        }
        name
        price {
          content {
            content {
              value
            }
          }
        }
        transport {
          content {
            content {
              value
            }
          }
        }
        contentfulid
        selector
        age
        insurance
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "gallery-camps" } }) {
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Obozy = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
    allContentfulObozy: { nodes: camps },
    allFile: { nodes: images },
    site: { siteMetadata },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="Obozy" />
      <SubpageLayout image={fluid} heading="Oferta – Obozy">
        <div className="camps-title-container">
          <h2 className="camps-title section-title">
            Obozy sportowe i rekreacyjne
          </h2>
          <h3>Realizujemy bony turystyczne!</h3>
          <a href={`${siteMetadata.siteUrl}/basen.jpg`}>Basen</a>
        </div>

        <div className="camps-nav">
          {camps.map((item) => {
            return (
              <button
                className="camps-nav-btn"
                key={item.contentfulid}
                onClick={() => scrollTo(`#${item.selector}`)}
                data-sal="zoom-in"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                <div className="camps-nav-image-container">
                  <Image
                    fluid={item.image.fluid}
                    className="camps-nav-image"
                    alt=""
                  />
                </div>
                <div className="camps-nav-info">
                  <h3 className="camps-nav-name">{item.name}</h3>
                  <img
                    src={WaveSeparator}
                    alt=""
                    className="camps-nav-separator"
                  />
                </div>
              </button>
            )
          })}
          <img src={CampsWaveDark} alt="" className="camp-wave camp-wave-nav" />
        </div>

        <section className="camps-container">
          {camps.map((item) => {
            return (
              <div className="camp" key={item.contentfulid} id={item.selector}>
                <h2
                  className="camp-name"
                  data-sal="fade"
                  data-sal-easing="ease"
                  data-sal-duration="1200"
                >
                  {item.name}
                </h2>
                <img
                  src={WaveSeparatorYellow}
                  alt=""
                  className="camp-separator"
                  data-sal="fade"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                />
                <div
                  className="camp-info"
                  data-sal="fade"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <Image
                    fluid={item.image.fluid}
                    className="camp-image"
                    alt=""
                  />
                  <p className="camp-description">
                    {item.description.description}
                  </p>
                </div>
                <div
                  className="camp-details"
                  data-sal="fade"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  <div className="camp-details-container">
                    <h3>
                      <MdChildCare className="camp-details-icon" />
                      Wiek
                    </h3>
                    <p className="camp-age">{item.age}</p>
                  </div>
                  <div className="camp-details-container">
                    <h3>
                      <MdSchedule className="camp-details-icon" />
                      Termin
                    </h3>
                    <div className="camp-wrapper">
                      {item.date.content.map((element, index) => {
                        return (
                          <p key={index} className="camp-date">
                            {element.content[0].value}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                  <div className="camp-details-container">
                    <h3>
                      <MdLocationOn className="camp-details-icon" />
                      Miejsce
                    </h3>
                    <div className="camp-wrapper">
                      {item.location.content.map((element, index) => {
                        return (
                          <p key={index} className="camp-location">
                            {element.content[0].value}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                  <div className="camp-details-container">
                    <h3>
                      <FaHome className="camp-details-icon" />
                      Zakwaterowanie
                    </h3>
                    <div className="camp-wrapper">
                      {item.accommodation.content.map((element, index) => {
                        return (
                          <p key={index} className="camp-accommodation">
                            {element.content[0].value}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                  <div className="camp-details-container">
                    <h3>
                      <MdRestaurant className="camp-details-icon" />
                      Wyżywienie
                    </h3>
                    <div className="camp-wrapper">
                      {item.food.content.map((element, index) => {
                        return (
                          <p key={index} className="camp-food">
                            {element.content[0].value}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                  <div className="camp-details-container">
                    <h3>
                      <FaBusAlt className="camp-details-icon" />
                      Transport
                    </h3>
                    <div className="camp-wrapper">
                      {item.transport.content.map((element, index) => {
                        return (
                          <p key={index} className="camp-transport">
                            {element.content[0].value}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                  <div className="camp-details-container">
                    <h3>
                      <FaAmbulance className="camp-details-icon" />
                      Ubezpieczenie
                    </h3>
                    <p className="camp-insurance">{item.insurance}</p>
                  </div>
                  <div className="camp-details-container">
                    <h3>
                      <FaRegMoneyBillAlt className="camp-details-icon" />
                      Cena
                    </h3>
                    <div className="camp-wrapper">
                      {item.price.content.map((element, index) => {
                        return (
                          <p key={index} className="camp-price">
                            {element.content[0].value}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <h3
                  data-sal="fade"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  <FaRegQuestionCircle className="camp-details-icon" />
                  Dostępność
                </h3>
                <div
                  className="camp-availability"
                  data-sal="fade"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {item.availability.content.map((element, index) => {
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
                <img
                  src={CampsWaveDark}
                  alt=""
                  className="camp-wave camp-wave-dark"
                />
                <img
                  src={CampsWaveLight}
                  alt=""
                  className="camp-wave camp-wave-light"
                />
              </div>
            )
          })}
        </section>
        <div className="camps-gallery-container">
          <section className="gallery-section-camps">
            <h2 className="section-title">Obozy - Galeria</h2>
            <div className="gallery">
              <Gallery
                images={images.map((item) => {
                  return item.childImageSharp
                })}
              />
            </div>
          </section>
        </div>
      </SubpageLayout>
      <SocialLinks styleClass="social-links-fixed" />
    </Layout>
  )
}

export default Obozy
