import Head from 'next/head';
import client from '../client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import Hero from '../components/Hero';
import JoinUs from '../components/JoinUs';
import Newsletter from '../components/Newsletter';
import ImageSection from '../components/ImageSection';

export default function About(props) {
	const { title, hero, textGrid, textSection, imageSectionOne, imageSectionTwo } = props;
	const dark = true;
	return (
		<div className="">
			<Head>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero {...hero} />
			<main className="">
				<div className="container">
					{textGrid && (
						<div className="row">
							{textGrid.map((item) => (
								<div className="col-12 col-md-6 four-block pb-4 pb-md-5" key={item._key}>
									<div className="col-12 col-md-10">
										<hr />
										<h6 className="py-3">{item.heading}</h6>
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
				<div className="container">
					<video
						controls
						className="d-block w-100 py-5"
						src="https://www.dropbox.com/s/gk7ngvenwhkeini/Medium%20Version%2009.07.22.mp4?raw=1"
						poster="/video-poster-2.webp">
						Sorry, your browser doesn't support embedded videos.
					</video>

					<Link href="https://www.youtube.com/watch?v=HOfLxT5a9Tc" className="d-flex align-items-end">
						<a target="_blank" className="video-link">
							Watch the entire interview on YouTube{' '}
							<svg
								className="d-none d-md-inline-block"
								width="24"
								height="24"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect width="16" height="16" fill="white" style={{}} />
								<path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="#FF704A" />
							</svg>
						</a>
					</Link>
				</div>
				<div
					className={
						dark
							? 'container-fluid bg-dark text-light py-0 py-md-5 my-5'
							: 'container-fluid bg-light text-dark py-3 my-3'
					}>
					<div className="container px-0 px-md-4 py-4">
						<div className="d-flex flex-column flex-md-row">
							<div className="col-12 col-md-6 mb-4">
								<h2 className="sticky-lg-top" style={{ width: '100%', top: '12%', zIndex: '0' }}>
									{textSection.heading}
								</h2>
							</div>
							<div className="col-12 col-md-6">
								<PortableText value={textSection.body} />
							</div>
						</div>
					</div>
				</div>
				<ImageSection direction={false} props={imageSectionOne} />
				<ImageSection direction={true} props={imageSectionTwo} />
			</main>
			<JoinUs />
			<Newsletter />
		</div>
	);
}

const query = groq`*[_type == "about"][0]{title, hero, textGrid, textSection, imageSectionOne, imageSectionTwo, metadata}`;

export async function getStaticProps(context) {
	const content = await client.fetch(query);
	return {
		props: {
			...content,
		},
	};
}
