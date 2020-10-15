import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import "../styles/basen.scss"
import Image from "gatsby-image"

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
  }
`

const Basen = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
    allContentfulBaseny: { nodes: baseny },
  } = useStaticQuery(query)

  console.log(baseny)

  return (
    <Layout>
      <SubpageLayout image={fluid} heading="Oferta – Basen">
        <h2 className="pool-title section-title">Szkółka pływacka</h2>
        <h2 className="pool-title section-title">Dla dzieci</h2>
        <section className="pool-info-container">
          {baseny.map((item) => {
            return (
              <div className="pool-info" key={item.contentfulid}>
                <Image fluid={item.logo.fluid} className="pool-info-logo" />
                <h2>{item.name}</h2>
                <h3>{item.address}</h3>
                <h3>{item.age}</h3>
                <h3>Plan zajęć</h3>
                {item.schedule.content.map((element, index) => {
                  return (
                    <p
                      key={index}
                      className={`${
                        element.content[0].value === "(wolne miejsca)"
                          ? `green`
                          : element.content[0].value === "(brak miejsc)"
                          ? `red`
                          : ""
                      }`}
                    >
                      {element.content[0].value}
                    </p>
                  )
                })}
                <p>
                  Cena: {item.price} zł / {item.duration} min
                </p>
              </div>
            )
          })}
        </section>
        <h3 className="account">Nr Konta: 84 2490 0005 0000 4600 6531 1730 </h3>
      </SubpageLayout>
    </Layout>
  )
}

export default Basen
