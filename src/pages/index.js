import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import SocialLinks from "../constants/socialLinks"
import Head from "../components/Head"
// import "../styles/index.scss"

const Home = () => {
  return (
    <Layout>
      <Head title="Start" />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <SocialLinks styleClass="social-links-fixed" />
    </Layout>
  )
}

export default Home
