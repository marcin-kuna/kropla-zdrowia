import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../styles/stats.scss"

const query = graphql`
  {
    file(relativePath: { eq: "hero-2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Stats = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    // <section className="stats">
    <BackgroundImage fluid={fluid} className="stats" Tag="section">
      <div className="stats-info">
        <h3 className="stats-heading">
          Najlepsza firma sportowa<span>W mieście</span>
        </h3>
        <p className="stats-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam
          dolorum, quidem corrupti commodi voluptates cumque quas velit beatae
          amet!
        </p>
        <div className="stats-numbers">
          <div className="stats-number">
            <span className="blue">200</span>
            <p>Czegoś</p>
          </div>
          <div className="stats-number">
            <span>14</span>
            <p>Lat na rynku</p>
          </div>
          <div className="stats-number">
            <span className="yellow">100%</span>
            <p>Zadowolnych klientów</p>
          </div>
        </div>
      </div>
    </BackgroundImage>
    // </section>
  )
}

export default Stats
