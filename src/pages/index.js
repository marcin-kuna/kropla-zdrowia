import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import WhyUs from "../components/WhyUs"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
// import "../styles/index.scss"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
    </Layout>
  )
}

export default Home
