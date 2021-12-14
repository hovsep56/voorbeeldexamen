import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import LatestNews from '../../components/latestNews';

const ArticleTemplate = ({
	data: {
		wpArticle: { articleFields: article, topics },
	},
}) => {
	const picture = getImage(article.image.localFile);

	return (
		<Layout>
			<Seo title={`Zenith | ${article.title}`} />

			<section className='grid-section'>
				<section className='article-template'>
					<GatsbyImage image={picture} alt={article.image.altText} />
					<div className='article-template-topics'>
						{topics.nodes.map(({ name }) => (
							<span>{name}</span>
						))}
					</div>
					<h1>{article.title}</h1>
					<p className='article-template-author'>Written by {article.author}</p>
					<article
						className='article-template-body'
						dangerouslySetInnerHTML={{ __html: article.body }}
					/>
				</section>
			</section>
			<aside className='grid-aside'>
				<LatestNews />
			</aside>
		</Layout>
	);
};
export const query = graphql`
	query ($id: String) {
		wpArticle(id: { eq: $id }) {
			articleFields {
				title
				author
				body
				image {
					altText
					localFile {
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED)
						}
					}
				}
			}
			topics {
				nodes {
					name
				}
			}
		}
	}
`;
export default ArticleTemplate;
