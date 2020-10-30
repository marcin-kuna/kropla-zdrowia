import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
    // title={`${title} | ${siteMetadata.title}`}
    // description={siteMetadata.description}
    // viewport="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    >
      <html lang="pl" />
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta property="og:title" content={`${title} | ${siteMetadata.title}`} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}/basen.jpg`} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
    </Helmet>
  )
}

export default Head
