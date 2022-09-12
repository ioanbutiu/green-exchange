import Head from 'next/head';
import client from '../../client';
import groq from 'groq';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';

import Hero from '../../components/Hero';
import Newsletter from '../../components/Newsletter';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default function News({ content, articles }) {
	const { title, hero } = content;
	return (
		<div className="">
			{/* <Head>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head> */}
			<Hero {...hero} />
			<main className="container">
				<div className="row py-5">
					{articles.length > 0 &&
						articles.map(
							({ _id, title = '', slug = '', mainImage, publishedAt = '' }) =>
								slug && (
									<div key={_id} className="col-12 col-md-4 mb-5" style={{ cursor: 'pointer' }}>
										<Link href="/news/[slug]" as={`/news/${slug.current}`}>
											<div>
												{mainImage && (
													<div
														className="w-100"
														style={{
															width: '100%',
															paddingTop: '75%',
															backgroundImage: `url("${urlFor(mainImage).auto('format').url()}")`,
															backgroundSize: 'cover',
															backgroundPosition: 'center',
														}}
													/>
												)}
												{/* <img src={urlFor(mainImage).auto('format')} className="w-100" /> */}
												<h5 className="d-block my-3">{title}</h5>
												{new Date(publishedAt).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												})}
											</div>
										</Link>{' '}
									</div>
								)
						)}
				</div>
			</main>
			<Newsletter />
		</div>
	);
}

const contentQuery = groq`*[_type == "news"][0]{title, hero, metadata}`;
const articleQuery = groq`*[_type == "article" && publishedAt < now()] | order(publishedAt desc)`;

export async function getStaticProps(context) {
	const content = await client.fetch(contentQuery);
	const articles = await client.fetch(articleQuery);
	return {
		props: {
			content,
			articles,
		},
	};
}
