import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"
import Hero from "../components/Hero"
import WhyUs from "../components/WhyUs"
import Services from "../components/Services"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <WhyUs />
      <Services />
    </Layout>
  )
}

export default Home
