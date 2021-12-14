import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Article from './article';

const LatestNews = () => {
	const {
		allWpArticle: { edges: articles },
	} = useStaticQuery(graphql`
		query {
			allWpArticle(limit: 3, sort: { order: DESC, fields: date }) {
				edges {
					node {
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
			}
		}
	`);
	return (
		<section>
			<h1>Latest News</h1>
			{articles.map(({ node: article }) => {
				return <Article key={article.id} article={article} />;
			})}
		</section>
	);
};

export default LatestNews;
