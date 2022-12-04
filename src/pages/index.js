import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderArticle from "../components/headerArticle"
import LatestNews from "../components/latestNews"
import Newsletter from "../components/newsletter"

const IndexPage = ({
  data: {
    wpPage: {
      homePageFields: { headerArticle },
	  newsletterFields
    },
  },
}) => {
  return (
    <Layout>
      <Seo title="Home" />
      <HeaderArticle isHeaderArticle={true} article={headerArticle} />
      <LatestNews />
      <Newsletter newsletter={newsletterFields}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      homePageFields {
        title
        description
        headerArticle {
          ... on WpArticle {
            id
            slug
            articleMeta {
              author
              title
              picture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
      newsletterFields {
        information
        title
        subscribeLink {
          title
          url
        }
      }
    }
  }
`

export default IndexPage
