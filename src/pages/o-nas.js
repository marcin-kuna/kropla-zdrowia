import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import Image from "gatsby-image"
import "../styles/o-nas.scss"
import WaveSeparator from "../assets/images/wave-long.svg"
import SocialLinks from "../constants/socialLinks"
import Head from "../components/Head"

const query = graphql`
  {
    file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulONas(sort: { order: ASC, fields: contentfulid }) {
      nodes {
        image {
          fluid(quality: 100, maxWidth: 4000) {
            ...GatsbyContentfulFluid
          }
        }
        description {
          description
        }
        name
        contentfulid
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
    allContentfulONas: { nodes: data },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="O nas" />
      <SubpageLayout image={fluid} heading="O zespole">
        <h2 className="team-title section-title">Kto jest kim</h2>
        <h2 className="team-title section-title">w Kropli Zdrowia?</h2>
        <section className="team">
          {data.map((item) => {
            return (
              <div className="team-member">
                <div
                  className="team-member-img-container"
                  data-sal="slide-down"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1500"
                >
                  <Image fluid={item.image.fluid} className="team-member-img" />
                </div>
                <div
                  className="team-member-info"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1500"
                >
                  <h3 className="team-member-name">{item.name}</h3>
                  <img
                    src={WaveSeparator}
                    alt=""
                    className="team-member-separator"
                  />
                  <p className="team-member-description">
                    {item.description.description}
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </SubpageLayout>
      <SocialLinks styleClass="social-links-fixed" />
    </Layout>
  )
}

export default About
