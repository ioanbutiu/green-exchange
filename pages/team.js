import Head from 'next/head';
import client from '../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

import Hero from '../components/Hero';
import JoinUs from '../components/JoinUs';
import Newsletter from '../components/Newsletter';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default function Team(props) {
	const { title, hero, team, board } = props;
	console.log(team);
	return (
		<div className="">
			{/* <Head>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head> */}
			<Hero {...hero} />
			<main className="container">
				<h4>GIX Team</h4>
				{team && (
					<div className="row my-5">
						{team.map((member) => (
							<div className="col-12 col-md-4 pb-5" key={member._key}>
								{member.image && (
									<img src={urlFor(member.image).url()} className="w-50 mb-3" style={{ borderRadius: '100%' }} />
								)}
								<div className="my-3">
									<h6 className="display-6 m-0">{member.name}</h6>
									<p style={{ color: '#ff704a' }}>{member.role}</p>
								</div>
								<p>{member.bio}</p>
							</div>
						))}
					</div>
				)}
				<h4>Advisors and Board of Directors</h4>
				{board && (
					<div className="row my-5">
						{board.map((member) => (
							<div className="col-12 col-md-4 pb-5" key={member._key}>
								{member.image && (
									<img src={urlFor(member.image).url()} className="w-50 mb-3" style={{ borderRadius: '100%' }} />
								)}
								<div className="my-3">
									<h6 className="display-6 m-0">{member.name}</h6>
									<p style={{ color: '#ff704a' }}>{member.role}</p>
								</div>
								<p>{member.bio}</p>
							</div>
						))}
					</div>
				)}
			</main>
			<JoinUs />
			<Newsletter />
		</div>
	);
}

const query = groq`*[_type == "team"][0]{title, hero, team, board, metadata}`;

export async function getStaticProps(context) {
	const content = await client.fetch(query);
	return {
		props: {
			...content,
		},
	};
}
