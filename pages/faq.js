import Head from 'next/head';
import client from '../client';
import groq from 'groq';

import Hero from '../components/Hero';
import FAQSection from '../components/FAQSection';

export default function FAQ(props) {
	const { title, hero, general, issuers, investors } = props;
	return (
		<div className="">
			<Head>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero {...hero} />
			<main className="container">
				<FAQSection title="General Questions" items={general} />
				<FAQSection title="Issuer Questions" items={issuers} />
				<FAQSection title="Investor Questions" items={investors} />
				<div className="py-5">
					Please contact us at <a href="mailto:info@greenexchange.us">info@greenexchange.us</a> if you cannot find an
					answer to your question.
				</div>
			</main>
		</div>
	);
}

const query = groq`*[_type == "faq"][0]{title, hero, general, issuers, investors, metadata}`;

export async function getStaticProps(context) {
	const content = await client.fetch(query);
	return {
		props: {
			...content,
		},
	};
}
