import Head from 'next/head';
import client from '../client';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import Hero from '../components/Hero';
import JoinUs from '../components/JoinUs';
import React, { useState } from 'react';

export default function Contact(props) {
	const { title, hero, info } = props;

	// States htmlFor contact form fields
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [company, setCompany] = useState('');
	const [message, setMessage] = useState('');

	//   Form validation state
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState('Submit');

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Validation check method
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (name.length <= 0) {
			tempErrors['name'] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors['email'] = true;
			isValid = false;
		}
		if (company.length <= 0) {
			tempErrors['company'] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors['message'] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log('errors', errors);
		return isValid;
	};

	//   Handling form submit

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText('Submitting...');
			const res = await fetch('/api/sendgrid', {
				body: JSON.stringify({
					email: email,
					name: name,
					company: company,
					message: message,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText('Submit');
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText('Submit');
		}
		console.log(name, email, company, message);
	};

	return (
		<div className="">
			<Head>
				<title>{title}</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero {...hero} />
			<main className="container">
				<div className="row" style={{ minHeight: '80vh' }}>
					<div className="col-12 col-md-6 ps-md-5">
						<form className="mb-5" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label small">
									Name
								</label>
								<input
									type="text"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
									name="name"
									className="form-control"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="company" className="form-label small">
									Company
								</label>
								<input
									type="text"
									name="company"
									value={company}
									onChange={(e) => {
										setCompany(e.target.value);
									}}
									className="form-control"
									id="company"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label small">
									Email address
								</label>
								<input
									type="email"
									name="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									className="form-control"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="message" className="form-label small">
									Message
								</label>
								<textarea
									name="message"
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
									className="form-control"
									style={{ minHeight: '200px' }}
								/>
							</div>
							<button
								type="submit"
								className="text-link mt-4 bg-light"
								style={{ border: 'none', color: '#ff704a', borderBottom: '1px solid #ff704a' }}>
								{buttonText}
							</button>
						</form>
					</div>
					<div className="col-12 col-md-6 pe-md-5 contact-info-container">
						<PortableText value={info} />
					</div>
				</div>
			</main>

			{/* <form onSubmit={handleSubmit} className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
				<h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

				<label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">
					Full name<span className="text-red-500 dark:text-gray-50">*</span>
				</label>
				<input
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					name="name"
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
				/>

				<label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">
					E-mail<span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
				/>

				<label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">
					Subject<span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					name="company"
					value={company}
					onChange={(e) => {
						setCompany(e.target.value);
					}}
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
				/>

				<label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">
					Message<span className="text-red-500">*</span>
				</label>
				<textarea
					name="message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>

				<div className="flex flex-row items-center justify-start">
					<button
						type="submit"
						className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
						Submit
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="text-cyan-500 ml-2"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</form> */}

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
