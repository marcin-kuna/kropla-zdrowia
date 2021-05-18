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
    <Helmet>
      <html lang="pl" />
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta property="og:title" content={`${title} | ${siteMetadata.title}`} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}/1.jpg`} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <script src="https://kroplazdrowia.skaleo.pl/wp-content/themes/skaleo/js/iframeResizer.min.js?v=1.7"></script>
    </Helmet>
  )
}

export default Head
