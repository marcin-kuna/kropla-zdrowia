import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
// import "../styles/index.scss"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </Layout>
  )
}

export default Home
