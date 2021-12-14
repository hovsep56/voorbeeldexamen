import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Article = ({
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
      <h3>{title}</h3>
      <p>Written by {author}</p>
      <Link className="link" to={`/articles/${slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default Article
