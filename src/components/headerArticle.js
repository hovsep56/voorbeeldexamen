import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeaderArticle = ({
  article: {
    slug,
    articleMeta: { title, author, picture },
  },
}) => {
  console.log(picture)
  const image = getImage(picture.localFile)
  return (
    <article className="article">
      <GatsbyImage image={image} alt ={picture.altText}/>
      <h2>{title}</h2>
      <p>Written by {author}</p>
      <Link className="link" to={`/articles/${slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default HeaderArticle
