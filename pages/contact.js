import Head from 'next/head';
import client from '../client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import Hero from '../components/Hero';
import JoinUs from '../components/JoinUs';

export default function Contact(props) {
	const { title, hero, info } = props;
	return (
		<div className="">
			{/* <Head>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head> */}
			<Hero {...hero} />
			<main className="container">
				<div className="row" style={{ minHeight: '80vh' }}>
					<div className="col-12 col-md-6 ps-md-5">
						<form className="mb-5">
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label small">
									Name
								</label>
								<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label small">
									Company
								</label>
								<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label small">
									Email address
								</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label small">
									Message
								</label>
								<input type="text" className="form-control" id="exampleInputPassword1" style={{ height: '30vh' }} />
							</div>
							<a className="text-link mt-4">Submit</a>
						</form>
					</div>
					<div className="col-12 col-md-6 pe-md-5 contact-info-container">
						<PortableText value={info} />
					</div>
				</div>
			</main>
			<JoinUs />
		</div>
	);
}

const query = groq`*[_type == "contact"][0]{title, hero, info, metadata}`;

export async function getStaticProps(context) {
	const content = await client.fetch(query);
	return {
		props: {
			...content,
		},
	};
}
