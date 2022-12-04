import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Article from "./article"

const LatestNews = () => {
  const {
    allWpArticle: { edges: articles },
  } = useStaticQuery(graphql`
    query {
      allWpArticle(limit: 6, sort: { order: DESC, fields: date }) {
        edges {
          node {
            id
            slug
            articleMeta {
              title
              author
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
    }
  `)
  return (
    <section className="flex-container">
      <h1>Latest News</h1>
      {articles.map(({ node }) => {
        return <Article key={node.id} article={node} />
      })}
    </section>
  )
}

export default LatestNews
