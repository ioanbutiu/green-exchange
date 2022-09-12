import Head from 'next/head';
import client from '../client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';

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
								<div className="col-6 four-block pb-5" key={item._key}>
									<div className="col-10">
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
						src="https://www.dropbox.com/sh/43rzo5pf66wgmx5/AABAFLRycx7gqRdcjszt94fxa/Medium%20Version%2009.07.22.mp4?raw=1"
						poster="/video-poster.png">
						Sorry, your browser doesn't support embedded videos.
					</video>
				</div>
				<div
					className={
						dark ? 'container-fluid bg-dark text-light py-5 my-5' : 'container-fluid bg-light text-dark py-3 my-3'
					}>
					<div className="container py-5">
						<div className="row">
							<div className="col-6">
								<h2 className="sticky-lg-top" style={{ width: '100%', top: '12%', zIndex: '0' }}>
									{textSection.heading}
								</h2>
							</div>
							<div className="col-6">
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
