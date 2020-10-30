import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Head = ({ title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  return (
    <Helmet
      lang="pl"
      title={`${title} | ${siteMetadata.title}`}
      description={siteMetadata.description}
      viewport="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      meta={{
        property: `og:image`,
        content: "/src/assets/images/basen.jpg",
      }}
    />
  )
}

export default Head
