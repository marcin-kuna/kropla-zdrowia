import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import Image from "gatsby-image"
import WaveSeparator from "../assets/images/wave-long.svg"
import WaveSeparatorYellow from "../assets/images/wave-long-yellow.svg"
import "../styles/obozy.scss"
import scrollTo from "gatsby-plugin-smoothscroll"

const query = graphql`
  {
    file(relativePath: { eq: "obozy.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulObozy(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        accommodation
        availability {
          content {
            content {
              value
            }
          }
        }
        date
        description {
          description
        }
        food
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        location
        name
        price
        program {
          content {
            content {
              value
            }
          }
        }
        transport
        contentfulid
        selector
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
  } = useStaticQuery(query)

  console.log(camps)

  return (
    <Layout>
      <SubpageLayout image={fluid} heading="Oferta – Obozy">
        <h2 className="camps-title section-title">
          Obozy sportowe i rekreacyjne
        </h2>
        <div className="camps-nav">
          {camps.map((item) => {
            return (
              <button
                className="camps-nav-btn"
                key={item.contentfulid}
                onClick={() => scrollTo(`#${item.selector}`)}
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
        </div>
        <section className="camps-container">
          {camps.map((item) => {
            return (
              <div
                className="camp-container"
                key={item.contentfulid}
                id={item.selector}
              >
                <h2 className="camp-name">{item.name}</h2>
                <img
                  src={WaveSeparatorYellow}
                  alt=""
                  className="camp-separator"
                />
                <div
                  className="camp"
                  key={item.contentfulid}
                  id={item.selector}
                >
                  <Image
                    fluid={item.image.fluid}
                    className="camp-image"
                    alt=""
                  />

                  <div className="camp-info">
                    <p className="camp-description">
                      {item.description.description}
                    </p>
                    <h3>Program</h3>
                    <div className="camp-program">
                      {item.program.content.map((element, index) => {
                        return <p key={index}>{element.content[0].value}</p>
                      })}
                    </div>
                    <h3>Termin</h3>
                    <p className="camp-date">{item.date}</p>
                    <h3>Miejsce</h3>
                    <p className="camp-location">{item.location}</p>
                    <h3>Zakwaterowanie</h3>
                    <p className="camp-accomodation">{item.accommodation}</p>
                    <h3>Wyżywienie</h3>
                    <p className="camp-food">{item.food}</p>
                    <h3>Transport</h3>
                    <p className="camp-transport">{item.transport}</p>
                    <h3>Cena</h3>
                    <p className="camp-price">{item.price}</p>
                    <h3>Dostępność</h3>
                    <div className="camp-availability">
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
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </SubpageLayout>
    </Layout>
  )
}

export default Obozy
