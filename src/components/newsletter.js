import React from "react"

const Newsletter = ({ newsletter }) => {
  return (
    <article className="newsletter">
      <h3>{newsletter.title}</h3>
      <p>{newsletter.description}</p>
      <a href={newsletter.inscribeLink.url}>{newsletter.inscribeLink.title}</a>
    </article>
  )
}

export default Newsletter
