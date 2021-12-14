import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const headerArticle = ({
  article: {
    slug,
    title,
    articleFields: { author, image },
  },
}) => {
  const picture = getImage(image.localFile)

  return (
    <article className="article">
      <GatsbyImage image={picture} alt={image.altText} />
      <h2>{title}</h2>
      <p>Written by {author}</p>
      <Link className="link" to={`/articles/${slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default headerArticle
