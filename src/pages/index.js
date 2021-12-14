import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import HeaderArticle from '../components/headerArticle';
import Article from '../components/article';
import LatestNews from '../components/latestNews';

const IndexPage = ({
	data: {
		wpPage: {
			homePageFields: { headerArticle, homeSpotlights },
		},
	},
}) => {
	return (
		<Layout className='grid'>
			<Seo title='Home' />
			<section className='grid-section'>
				<HeaderArticle article={headerArticle} />
				<section className='spotlight-section'>
					<h2 className='background-primary'>{homeSpotlights.title}</h2>
					<div className='spotlight-grid'>
						{homeSpotlights.spotlightArticles.map((article) => {
							return <Article key={article.id} article={article} />;
						})}
					</div>
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
		wpPage(slug: { eq: "home" }) {
			homePageFields {
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
				homeSpotlights {
					title

					spotlightArticles {
						... on WpArticle {
							id
							title
							slug
							articleFields {
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
				}
			}
		}
	}
`;

export default IndexPage;
