import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import HeaderArticle from '../components/headerArticle';
import Article from '../components/article';
import LatestNews from '../components/latestNews';
import FinancialMarket from '../components/financialMarket';

const EconomyPage = ({
	data: {
		wpPage: {
			economyPageFields: {
				headerArticle,
				economicalSpotlights,
				financialMarkets: { nasdaq, bel20 },
			},
		},
	},
}) => {
	return (
		<Layout className='grid'>
			<Seo title='Economy news' />
			<section className='grid-section'>
				<HeaderArticle article={headerArticle} />
				<section className='spotlight-section'>
					<h2 className='background-primary'>{economicalSpotlights.title}</h2>
					<div className='spotlight-grid'>
						{economicalSpotlights.spotlightArticles.map((article) => {
							return <Article key={article.id} article={article} />;
						})}
					</div>
				</section>
				<section className='financial-markets-section'>
					<h2 className='background-primary'>Financial Markets</h2>
					<FinancialMarket market={nasdaq} />
					<FinancialMarket market={bel20} />
				</section>
			</section>
			<aside className='grid-aside'>
				<LatestNews />
			</aside>
		</Layout>
	);
};

export const query = graphql`
	query {
		wpPage(slug: { eq: "economy" }) {
			economyPageFields {
				headerArticle {
					... on WpArticle {
						id
						slug
						title
						articleFields {
							author
							image {
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
				economicalSpotlights {
					spotlightArticles {
						... on WpArticle {
							id
							slug
							articleFields {
								author
								title
								image {
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
					title
				}
				financialMarkets {
					bel20 {
						title
						chart {
							altText
							localFile {
								childImageSharp {
									gatsbyImageData(placeholder: BLURRED)
								}
							}
						}
					}
					nasdaq {
						title
						chart {
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
`;

export default EconomyPage;
