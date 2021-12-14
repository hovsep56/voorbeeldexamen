import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FinancialMarket = ({ market }) => {
  const picture = getImage(market.chart.localFile)

  return (
    <article className="chart">
      <h2>{market.title}</h2>
      <GatsbyImage image={picture} alt={market.chart.altText} />
    </article>
  )
}

export default FinancialMarket
