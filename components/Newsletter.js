import Link from 'next/link';
import React, { useState } from 'react';
import { CheckmarkOutline, Error } from '@carbon/icons-react';

export default function Newsletter() {
	// States htmlFor contact form fields
	const [email, setEmail] = useState('');

	//   Form validation state
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState('Submit');

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);
	const [showValidationMessage, setShowValidationMessage] = useState(false);

	// Validation check method
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (email.length <= 0) {
			tempErrors['email'] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log('errors', errors);
		return isValid;
	};

	//   Handling form submit

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email);
		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText('Submitting...');
			setShowValidationMessage(false);

			const res = await fetch('/api/sendgridNewsletter', {
				body: JSON.stringify({
					email: email,
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
				setShowValidationMessage(false);
				setButtonText('Submit');
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setShowValidationMessage(false);
			setButtonText('Submit');
			setEmail('');
		} else {
			setShowValidationMessage(true);
		}
		console.log(email);
	};

	return (
		<div className="container-fluid bg-primary text-dark py-5">
			<div className="container d-flex flex-column flex-md-row align-items-center px-0 px-md-4">
				<div className="col-12 col-md-6 pe-0 pe-md-5">
					<h3>Stay up to date on our news and progress</h3>
				</div>
				<div className="col-12 col-md-6">
					<form className="d-md-flex" onSubmit={handleSubmit}>
						<input
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								console.log(e.target.value);
							}}
							name="email"
							className="form-control mt-4 mt-md-0"
							placeholder="Email address"></input>
						<button
							type="submit"
							className="text-link mt-4 bg-primary align-self-center text-dark border-dark ms-0 ms-md-5 mt-4 mt-md-0"
							style={{ border: 'none', color: '#000', borderBottom: '1px solid #000' }}>
							{buttonText}
						</button>
					</form>
					<div className="pt-3">
						{showSuccessMessage ? (
							<div className="d-flex" style={{ color: '#124143' }}>
								<CheckmarkOutline size={24} className="flex-shrink-0 me-2" />
								Thank you for subscribing.
							</div>
						) : null}
						{showFailureMessage ? (
							<div className="d-flex" style={{ color: 'red' }}>
								<Error size={24} className="flex-shrink-0 me-2" />
								<p className="">There was an error processing your request. Please try again.</p>
							</div>
						) : null}
						{showValidationMessage ? (
							<div className="d-flex" style={{ color: 'red' }}>
								<Error size={24} className="flex-shrink-0 me-2" />
								<p className="">Please enter your email address.</p>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
