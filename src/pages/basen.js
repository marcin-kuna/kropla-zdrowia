import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SubpageLayout from "../components/SubpageLayout"

const query = graphql`
  {
    file(relativePath: { eq: "basen.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Basen = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <SubpageLayout image={fluid} heading="Oferta – Basen">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit
          consectetur dolore ducimus repellendus, nam nihil nulla reprehenderit
          unde quibusdam officia? Aliquid ex, dignissimos quas accusamus
          delectus pariatur veritatis fugiat laudantium vel illum recusandae
          ipsam? Aliquam velit atque eveniet cupiditate asperiores blanditiis
          sequi ut provident dolore fugit suscipit explicabo perspiciatis illo
          dolorem ipsa laboriosam quos corrupti, possimus alias veniam
          recusandae expedita mollitia doloremque. Accusamus quidem minima
          consequatur ut ducimus, modi ipsum optio veritatis doloremque
          similique aspernatur dolorum labore quis expedita, repudiandae, sed
          quod officiis sapiente? Consectetur necessitatibus quae, repudiandae
          laborum culpa distinctio sint deserunt esse labore cum similique,
          ipsam explicabo?
        </div>
      </SubpageLayout>
    </Layout>
  )
}

export default Basen
