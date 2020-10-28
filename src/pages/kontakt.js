import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"
import "../styles/kontakt.scss"
import SocialLinks from "../constants/socialLinks"
import { MdLocationOn, MdEmail } from "react-icons/md"
import { FaPhone, FaPiggyBank } from "react-icons/fa"

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
          <div class="form-wrapper">
            <form name="contact-form" method="POST" data-netlify="true">
              <div class="formgroup" id="name-form">
                <label for="name">Twoje imię</label>
                <input type="text" id="name" name="name" />
              </div>

              <div class="formgroup" id="email-form">
                <label for="email">Twój e-mail</label>
                <input type="email" id="email" name="email" />
              </div>

              <div class="formgroup" id="message-form">
                <label for="message">Twoja wiadomość</label>
                <textarea id="message" name="message"></textarea>
              </div>

              <input type="submit" value="Wyślij!" />
              {/* <button className='submit-btn' type='submit'>Wyślij!</button> */}
            </form>
          </div>
        </section>
      </SubpageLayout>
    </Layout>
  )
}

export default Kontakt
