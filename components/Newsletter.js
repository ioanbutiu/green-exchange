import Link from 'next/link';
import { useState } from 'react';
// import MailchimpForm from 'react-mailchimp-form'

export default function Newsletter() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Sending');
		let data = {
			email,
		};
		fetch('/api/newsletter', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log('Response received');
			if (res.status === 200) {
				console.log('Response succeeded!');
				setSubmitted(true);
				setEmail('');
			}
		});
	};
	return (
		<div className="container-fluid bg-primary text-dark py-4">
			<div className="container d-flex flex-column flex-md-row align-items-center px-0 px-md-4">
				<div className="col-12 col-md-6 pe-0 pe-md-5">
					<h6>Newsletter</h6>
					<h4>Stay up to date with our news and insights by subscribing to our regular newsletter</h4>
				</div>
				<div className="col-12 col-md-6 d-md-flex">
					<input
						type="text"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						name="name"
						className="form-control mt-4 mt-md-0"
						placeholder="Email address"></input>
					<a
						onClick={(e) => {
							handleSubmit(e);
						}}
						className="text-link align-self-center text-dark border-dark ms-0 ms-md-5 mt-4 mt-md-0">
						Submit
					</a>
				</div>
			</div>
		</div>
	);
}
