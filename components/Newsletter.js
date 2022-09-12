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
			<div className="container d-flex align-items-center py-4">
				<div className="w-50 pe-5">
					<h6>Newsletter</h6>
					<h4>Stay up to date with our news and insights by subscribing to our regular newsletter</h4>
				</div>
				<div className="w-50 d-flex ps-5">
					<input
						type="text"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						name="name"
						className="form-control w-100"
						placeholder="Email address"></input>
					<a
						onClick={(e) => {
							handleSubmit(e);
						}}
						className="text-link align-self-center text-dark border-dark ms-4">
						Submit
					</a>
				</div>
			</div>
		</div>
	);
}
