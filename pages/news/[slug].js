import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Newsletter from '../../components/Newsletter';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

const ptComponents = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null;
			}
			return (
				<div className="my-4">
					<img
						alt={value.alt || ' '}
						loading="lazy"
						src={urlFor(value).fit('scale').auto('format')}
						className="w-100 my-3"
					/>
					<small className="text-muted">{value.caption}</small>
				</div>
			);
		},
	},
	block: {
		small: ({ children }) => {
			return (
				<small style={{ display: 'block', paddingTop: '2rem', marginTop: '2rem', borderTop: '1px solid #ccc' }}>
					{children}
				</small>
			);
		},
	},
};

const Article = ({ article }) => {
	const { title, mainImage, lede, name, authorImage, publishedAt, categories, body } = article;

	const [copied, setCopied] = useState(false);

	function copy() {
		const el = document.createElement('input');
		el.value = window.location.href;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 3000);
	}

	return (
		<div>
			{/* <Head>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head> */}
			<article style={{ marginBottom: '4rem' }}>
				<div className="bg-secondary" style={{ paddingTop: '91px' }}>
					<div
						className="d-md-flex justify-content-start align-items-end position-relative bg-secondary text-light vh-50"
						style={{ minHeight: '500px', borderTop: '1px solid #0c755c' }}>
						<div className="container">
							<div className="col-12 col-md-6 pe-md-5 py-4">
								{categories && (
									<div className="mb-3">
										{categories.map((category) => (
											<div key={category} className="small text-primary">
												{category}
											</div>
										))}
									</div>
								)}
								<h2 className="">{title}</h2>
								<p>{lede}</p>
							</div>
						</div>
						<img
							src={urlFor(mainImage).auto('format')}
							className="w-50 h-100 d-none d-md-block position-absolute"
							style={{
								objectFit: 'cover',
								objectPosition: `${(mainImage.hotspot ? mainImage.hotspot.x : 0.5) * 100}% ${
									(mainImage.hotspot ? mainImage.hotspot.y : 0.5) * 100
								}%`,
								top: '0',
								right: '0',
							}}
						/>
						<img
							src={urlFor(mainImage).auto('format')}
							className="w-100 d-md-none vh-50"
							style={{
								objectFit: 'cover',
								objectPosition: `${(mainImage.hotspot ? mainImage.hotspot.x : 0.5) * 100}% ${
									(mainImage.hotspot ? mainImage.hotspot.y : 0.5) * 100
								}%`,
								top: '0',
								right: '0',
							}}
						/>
					</div>
				</div>
				<div className="container d-flex flex-column flex-md-row my-1 my-md-5 py-4">
					<div className="d-flex flex-column col-12 col-md-4 mb-5">
						<div className="d-flex flex-row flex-md-column align-items-center align-items-md-start">
							{authorImage && (
								<img
									src={urlFor(authorImage).url()}
									className="mb-2 me-4"
									style={{ width: '60px', borderRadius: '100%' }}
								/>
							)}
							<p className="mb-0">{name}</p>
						</div>
						<hr className="w-50 d-none d-md-block" style={{ borderColor: '#ccc' }} />
						<hr className="d-md-none w-100" style={{ borderColor: '#ccc' }} />
						<div className="d-flex flex-row flex-md-column align-items-center align-items-md-start">
							<p className="text-muted m-0 me-4">Published</p>
							<p className="m-0">
								{new Date(publishedAt).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</p>
						</div>
						<hr className="w-50 d-none d-md-block" style={{ borderColor: '#ccc' }} />
						<hr className="d-md-none w-100" style={{ borderColor: '#ccc' }} />
						<div className="d-flex flex-row flex-md-column align-items-center align-items-md-start">
							<p className="text-muted mb-2 me-4">Share</p>
							<div className="d-flex flex-column gap-3 position-relative">
								{/* <a href="">
									<svg
										className="d-block p-2"
										style={{ borderRadius: '1000px', border: '1px solid #124143' }}
										width="40"
										height="40"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<rect width="24" height="24" />
										<path
											d="M8.94 18.705C10.2069 18.713 11.4627 18.4693 12.6346 17.9882C13.8066 17.507 14.8714 16.798 15.7672 15.9022C16.663 15.0064 17.3721 13.9416 17.8532 12.7696C18.3343 11.5977 18.578 10.3418 18.57 9.07499C18.57 8.92499 18.57 8.78249 18.57 8.63249C19.2267 8.15136 19.7951 7.56012 20.25 6.88499C19.6316 7.15544 18.9773 7.3348 18.3075 7.41749C19.0177 6.99432 19.5506 6.32824 19.8075 5.54249C19.1456 5.93957 18.4199 6.21871 17.6625 6.36749C17.1524 5.82401 16.4775 5.46378 15.7421 5.34253C15.0067 5.22128 14.2518 5.34576 13.5943 5.69673C12.9368 6.04769 12.4132 6.60557 12.1047 7.28405C11.7962 7.96252 11.7198 8.72376 11.8875 9.44999C10.542 9.38395 9.22553 9.03525 8.02377 8.42662C6.822 7.81798 5.7619 6.96305 4.9125 5.91749C4.48419 6.66087 4.35437 7.53923 4.54932 8.37473C4.74427 9.21023 5.24942 9.94043 5.9625 10.4175C5.43646 10.3972 4.92259 10.2533 4.4625 9.99749V10.035C4.45783 10.8119 4.71954 11.5669 5.20403 12.1742C5.68851 12.7815 6.3665 13.2044 7.125 13.3725C6.63573 13.5041 6.12322 13.5246 5.625 13.4325C5.84459 14.095 6.26376 14.6734 6.82503 15.0883C7.38631 15.5032 8.06219 15.7344 8.76 15.75C7.56691 16.7104 6.08407 17.239 4.5525 17.25C4.28396 17.2422 4.01606 17.2197 3.75 17.1825C5.30022 18.1702 7.1019 18.6909 8.94 18.6825"
											fill="#124143"
										/>
									</svg>
								</a> */}
								<button onClick={copy} className="align-self-start m-0 p-0 bg-light border-0">
									<svg
										className="d-block p-2"
										style={{ borderRadius: '1000px', border: '1px solid #124143' }}
										width="40"
										height="40"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<rect width="24" height="24" fill="white" />
										<path
											d="M21.9376 5.06989C21.5195 4.65037 21.0228 4.3175 20.4758 4.09038C19.9288 3.86325 19.3424 3.74634 18.7501 3.74634C18.1578 3.74634 17.5714 3.86325 17.0244 4.09038C16.4774 4.3175 15.9807 4.65037 15.5626 5.06989L16.6276 6.13489C16.9068 5.85566 17.2383 5.63417 17.6031 5.48306C17.968 5.33194 18.359 5.25416 18.7538 5.25416C19.1487 5.25416 19.5397 5.33194 19.9046 5.48306C20.2694 5.63417 20.6009 5.85566 20.8801 6.13489C21.1593 6.41411 21.3808 6.7456 21.5319 7.11042C21.683 7.47524 21.7608 7.86626 21.7608 8.26114C21.7608 8.65602 21.683 9.04703 21.5319 9.41185C21.3808 9.77668 21.1593 10.1082 20.8801 10.3874L14.8801 16.3874C14.3172 16.9513 13.5533 17.2685 12.7565 17.2692C11.9597 17.2699 11.1953 16.9541 10.6313 16.3911C10.0674 15.8282 9.75023 15.0643 9.74953 14.2675C9.74883 13.4707 10.0647 12.7063 10.6276 12.1424L11.6851 11.0774L10.6276 10.0124L9.5626 11.0774C9.14308 11.4955 8.81021 11.9922 8.58309 12.5392C8.35597 13.0862 8.23905 13.6726 8.23905 14.2649C8.23905 14.8571 8.35597 15.4436 8.58309 15.9906C8.81021 16.5376 9.14308 17.0343 9.5626 17.4524C10.4112 18.2901 11.5577 18.7568 12.7501 18.7499C13.3446 18.7523 13.9338 18.6369 14.4834 18.4104C15.0331 18.1838 15.5325 17.8506 15.9526 17.4299L21.9526 11.4299C22.7933 10.5841 23.264 9.43929 23.2611 8.24678C23.2583 7.05428 22.7823 5.91165 21.9376 5.06989Z"
											fill="#124143"
										/>
										<path
											d="M3.1426 18.6149C2.86254 18.3361 2.64032 18.0048 2.48868 17.6399C2.33704 17.275 2.25898 16.8838 2.25898 16.4886C2.25898 16.0935 2.33704 15.7022 2.48868 15.3374C2.64032 14.9725 2.86254 14.6411 3.1426 14.3624L9.1426 8.36239C9.42135 8.08233 9.75269 7.8601 10.1176 7.70846C10.4825 7.55683 10.8737 7.47877 11.2688 7.47877C11.664 7.47877 12.0552 7.55683 12.4201 7.70846C12.785 7.8601 13.1163 8.08233 13.3951 8.36239C13.6734 8.64334 13.8925 8.97729 14.0393 9.34445C14.1862 9.71161 14.2579 10.1045 14.2501 10.4999C14.2524 10.8965 14.176 11.2896 14.0254 11.6565C13.8748 12.0234 13.6529 12.3568 13.3726 12.6374L11.7826 14.2499L12.8476 15.3149L14.4376 13.7249C15.284 12.8785 15.7595 11.7306 15.7595 10.5336C15.7595 9.33669 15.284 8.18876 14.4376 7.34239C13.5912 6.49601 12.4433 6.02053 11.2463 6.02053C10.0494 6.02053 8.90147 6.49601 8.0551 7.34239L2.0551 13.3424C1.63445 13.7606 1.30063 14.2578 1.07284 14.8055C0.845051 15.3532 0.727783 15.9405 0.727783 16.5336C0.727783 17.1268 0.845051 17.7141 1.07284 18.2618C1.30063 18.8094 1.63445 19.3067 2.0551 19.7249C2.90922 20.5562 4.05827 21.0148 5.2501 20.9999C6.45243 21.001 7.60639 20.5265 8.4601 19.6799L7.3951 18.6149C7.11634 18.8949 6.78501 19.1172 6.42012 19.2688C6.05524 19.4204 5.66399 19.4985 5.26885 19.4985C4.87371 19.4985 4.48246 19.4204 4.11758 19.2688C3.75269 19.1172 3.42135 18.8949 3.1426 18.6149Z"
											fill="#124143"
										/>
									</svg>
								</button>
								{copied ? (
									<div
										className="px-2 py-1 align-self-start bg-primary position-absolute d-flex align-items-center"
										style={{ height: '40px', left: '50px' }}>
										<small className="text-dark m-0 p-0" style={{ whiteSpace: 'nowrap' }}>
											Link copied to clipboard!
										</small>
									</div>
								) : null}
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<PortableText value={body} components={ptComponents} />
					</div>
				</div>
			</article>
			<Newsletter />
		</div>
	);
};

const query = groq`*[_type == "article" && slug.current == $slug][0]{title, mainImage, publishedAt, lede, 'name': author->name,  "authorImage": author->image,"categories": categories[]->title, body}`;

export async function getStaticPaths() {
	const paths = await client.fetch(`*[_type == "article" && defined(slug.current)][].slug.current`);

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = '' } = context.params;
	const article = await client.fetch(query, { slug });
	return {
		props: {
			article,
		},
	};
}

export default Article;
