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
	console.log(team[0].linkedIn);
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
							<div
								className="col-12 col-md-4 pb-5 mb-2 mb-md-4 d-flex flex-column align-items-start justify-content-between"
								key={member._key}
								style={{ justifyContent: 'space-between' }}>
								<div>
									{member.image && (
										<img src={urlFor(member.image).url()} className="w-50 mb-3" style={{ borderRadius: '100%' }} />
									)}
									<div className="my-3">
										<h6 className="display-6 m-0">{member.name}</h6>
										<p style={{ color: '#ff704a' }}>{member.role}</p>
									</div>
									<p>{member.bio}</p>
								</div>
								{typeof member.linkedIn != 'undefined' ? (
									<a href={member.linkedIn} target="_blank" className="">
										<svg
											className="d-block p-2"
											style={{ borderRadius: '1000px', border: '1px solid #ff704a' }}
											width="40"
											height="40"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<rect width="24" height="24" />
											<path
												d="M19.65 3H4.35C3.6 3 3 3.6 3 4.275V19.65C3 20.325 3.6 20.925 4.35 20.925H19.65C20.4 20.925 21 20.325 21 19.65V4.275C21 3.6 20.4 3 19.65 3ZM8.325 18.3H5.7V9.75H8.325V18.3ZM7.05 8.55C6.225 8.55 5.475 7.875 5.475 6.975C5.475 6.075 6.15 5.4 7.05 5.4C7.875 5.4 8.625 6.075 8.625 6.975C8.625 7.875 7.875 8.55 7.05 8.55ZM18.375 18.225H15.75V14.025C15.75 13.05 15.75 11.7 14.325 11.7C12.9 11.7 12.75 12.825 12.75 13.875V18.15H10.125V9.75H12.6V10.875H12.675C13.05 10.2 13.95 9.45 15.225 9.45C17.925 9.45 18.45 11.25 18.45 13.575V18.225H18.375Z"
												fill="#ff704a"
											/>
										</svg>
									</a>
								) : null}
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
