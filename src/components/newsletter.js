import React from "react"

const Newsletter = ({ newsletter }) => {
  return (
    <article className="newsletter">
      <h3>{newsletter.title}</h3>
      <p>{newsletter.information}</p>
      <a href={newsletter.subscribeLink.url}>{newsletter.subscribeLink.title}</a>
    </article>
  )
}

export default Newsletter
