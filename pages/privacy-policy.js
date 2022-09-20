import client from '../client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';

import Hero from '../components/Hero';

export default function PrivacyPolicy(props) {
	const { hero, textSection } = props;
	return (
		<div>
			<Head>
				<title>Privacy Policy</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero {...hero} />
			<div className="container-fluid bg-light text-dark py-3 my-3">
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
		</div>
	);
}

const query = groq`*[_type == "privacyPolicy"][0]{hero, textSection, metadata}`;

export async function getStaticProps(context) {
	const content = await client.fetch(query);
	return {
		props: {
			...content,
		},
	};
}
