import React from "react"
import { Link } from "gatsby"

const Article = ({
  article: {
    slug,
    articleMeta: { title, author, picture },
  },
}) => {
  return (
    <article className="article">
      {/*Voeg hier de correcte image component toe. */}
      <h2>{title}</h2>
      <p>Written by {author}</p>
      <Link className="link" to={`/articles/${slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default Article
