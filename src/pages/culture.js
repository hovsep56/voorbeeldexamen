import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderArticle from "../components/headerArticle"
import Article from "../components/article"
import LatestNews from "../components/latestNews"
import Newsletter from "../components/newsletter"

const CulturePage = ({
  data: {
    wpPage: {
      culturePageFields: { headerArticle, culturalSpotlights, newsletter },
    },
  },
}) => {
  return (
    <Layout>
      <Seo title="Cultural news" />
      <section className="grid-section">
        <HeaderArticle article={headerArticle} />
        <section className="spotlight-section">
          <h2 className="background-primary">{culturalSpotlights.title}</h2>
          <div className="spotlight-grid">
            {culturalSpotlights.spotlightArticles.map(article => {
              return <Article key={article.id} article={article} />
            })}
          </div>
          <Newsletter newsletter={newsletter} />
        </section>
      </section>
      <aside className="grid-aside">
        <LatestNews />
      </aside>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "culture" }) {
      culturePageFields {
        headerArticle {
          ... on WpArticle {
            id
            slug
            title
            articleFields {
              author
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
        culturalSpotlights {
          title

          spotlightArticles {
            ... on WpArticle {
              id
              title
              slug
              articleFields {
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
        newsletter {
          description
          title
          inscribeLink {
            title
            url
          }
        }
      }
    }
  }
`

export default CulturePage
