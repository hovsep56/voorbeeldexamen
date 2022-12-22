import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderArticle from "../components/headerArticle"
import LatestNews from "../components/latestNews"
import Newsletter from "../components/newsletter"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      {/* <HeaderArticle article={headerArticle} /> */}
      {/* <LatestNews /> */}
      {/* <Newsletter newsletter={newsletterFields}/> */}
    </Layout>
  )
}

export default IndexPage;