import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import Image from "gatsby-image"
import WaveSeparator from "../assets/images/wave-long.svg"
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
                    key={item.image.src}
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
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            amet. Consectetur sequi deserunt nostrum natus nesciunt, harum in
            nemo earum unde est iusto consequatur asperiores beatae deleniti
            culpa ipsum reiciendis rerum, veritatis debitis iure! Ratione ea aut
            hic repellat perspiciatis.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            amet. Consectetur sequi deserunt nostrum natus nesciunt, harum in
            nemo earum unde est iusto consequatur asperiores beatae deleniti
            culpa ipsum reiciendis rerum, veritatis debitis iure! Ratione ea aut
            hic repellat perspiciatis.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            amet. Consectetur sequi deserunt nostrum natus nesciunt, harum in
            nemo earum unde est iusto consequatur asperiores beatae deleniti
            culpa ipsum reiciendis rerum, veritatis debitis iure! Ratione ea aut
            hic repellat perspiciatis.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            amet. Consectetur sequi deserunt nostrum natus nesciunt, harum in
            nemo earum unde est iusto consequatur asperiores beatae deleniti
            culpa ipsum reiciendis rerum, veritatis debitis iure! Ratione ea aut
            hic repellat perspiciatis.
          </p>
        </div>
        <div id={camps[0].selector}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            amet. Consectetur sequi deserunt nostrum natus nesciunt, harum in
            nemo earum unde est iusto consequatur asperiores beatae deleniti
            culpa ipsum reiciendis rerum, veritatis debitis iure! Ratione ea aut
            hic repellat perspiciatis.
          </p>
        </div>
      </SubpageLayout>
    </Layout>
  )
}

export default Obozy
