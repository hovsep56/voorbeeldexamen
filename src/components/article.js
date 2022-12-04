import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Article = ({
  article: {
    slug,
    articleMeta: { title, author, picture },
  },
}) => {
  const image = getImage(picture.localFile)
  return (
    <article className="article flex-item">
      <GatsbyImage image={image} alt={picture.altText} />
      <h3>{title}</h3>
      <p>Written by {author}</p>
      <Link className="link" to={`/articles/${slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default Article
