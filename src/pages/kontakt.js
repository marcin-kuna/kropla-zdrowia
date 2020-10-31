import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import "../styles/kontakt.scss"
import SocialLinks from "../constants/socialLinks"
import { MdLocationOn, MdEmail } from "react-icons/md"
import { FaPhone, FaPiggyBank } from "react-icons/fa"
import Head from "../components/Head"

const query = graphql`
  {
    file(relativePath: { eq: "contact2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Kontakt = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="Kontakt" />
      <SubpageLayout image={fluid} heading="Skontaktuj się!">
        <section className="contact">
          <div className="contact-info">
            <h2>Kropla Zdrowia</h2>
            <div className="contact-info-details">
              <p>
                <MdLocationOn className="contact-info-icon" />
                ul. Focha 13/21, 26-600 Radom
              </p>
              <p>
                <FaPhone className="contact-info-icon" />
                (+48) 603 952 902
              </p>
              <p>
                <MdEmail className="contact-info-icon" />
                email@email.com
              </p>
              <p>
                <FaPiggyBank className="contact-info-icon" />
                Bank: 84 2490 0005 0000 4600 6531 1730
              </p>
            </div>
            <SocialLinks />
          </div>
          <div className="form-wrapper">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div id="name-form">
                <label htmlFor="name">Twoje imię</label>
                <input type="text" id="name" name="name" />
              </div>
              <div id="email-form">
                <label htmlFor="email">Twój e-mail</label>
                <input type="email" id="email" name="email" />
              </div>
              <div id="message-form">
                <label htmlFor="message">Twoja wiadomość</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Wyślij!
              </button>
            </form>
          </div>
        </section>
      </SubpageLayout>
    </Layout>
  )
}

export default Kontakt
