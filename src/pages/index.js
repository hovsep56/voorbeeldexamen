import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderArticle from "../components/headerArticle"
import LatestNews from "../components/latestNews"
import Newsletter from "../components/newsletter"
import { graphql } from "gatsby"

const IndexPage = (
  {
    data: {
      wpPage: {
        homePageFields: { headerArticle: article },
        newsletterFields: news
      },
    },
  },
) => {
  console.log(article.slug);
  console.log(news.title);
  return (
    <Layout>
      <Seo title="Home" />
      { <HeaderArticle article={article} /> }
      {/* <LatestNews /> */}
      { <Newsletter newsletter={news}/> }
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query homePageFields {
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      headerArticle {
        ... on WpArticle {
          id
          slug
          articleMeta {
            author
            title
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              altText
            }
          }
        }
      }
    }
    newsletterFields {
      title
      information
      subscribeLink {
        url
        title
      }
    }
  }
}

`
