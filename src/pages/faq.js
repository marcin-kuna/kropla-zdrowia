import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SocialLinks from "../constants/socialLinks"
import Head from "../components/Head"
import "../styles/faq.scss"
import SubpageLayout from "../components/SubpageLayout"

const query = graphql`
  {
    allContentfulFaq(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        question
        contentfulid
        answer {
          answer
        }
      }
    }
    file(relativePath: { eq: "question.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Faq = () => {
  const {
    allContentfulFaq: { nodes: faqs },
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="FAQ" />
      <SubpageLayout image={fluid} heading="FAQ">
        <section className="faq section-center">
          <h2 className="section-title">Najczęściej zadawane pytania</h2>
          <div>
            {faqs.map((item) => {
              return (
                <div key={item.contentfulid} className="faq-container">
                  <h3 className="faq-question">{item.question}</h3>
                  <p className="faq-answer">{item.answer.answer}</p>
                </div>
              )
            })}
          </div>
        </section>
        <SocialLinks styleClass="social-links-fixed" />
      </SubpageLayout>
    </Layout>
  )
}

export default Faq
