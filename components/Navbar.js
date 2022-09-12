import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(props) {
	const [colorChange, setColorchange] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 1) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', changeNavbarColor);
	});

	// hideMenu = () => {
	// 	this.setState({ showNav: false });
	// };

	// handleMenuToggle = () => {
	// 	const { showNav } = this.state;
	// 	this.setState({
	// 		showNav: !showNav,
	// 	});
	// };

	const { title = 'Missing title', navItems, router, logo } = props;
	return (
		<nav
			className={
				colorChange
					? 'navbar navbar-expand-lg bg-light py-4 fixed-top border-bottom'
					: 'navbar navbar-expand-lg bg-transparent py-4 fixed-top'
			}>
			<div className="container d-flex justify-content-between">
				<Link href={'/'}>
					<a title="">
						<svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M50.6717 0.358398H42.8774V39.2884H50.6717V0.358398Z" fill="#19E280" />
							<path
								d="M75.2965 19.0729L88.6559 0.358398H79.6979L70.8252 12.7486L62.1524 0.358398H52.7891L66.1353 19.3786L51.8975 39.2884H60.8051L70.5575 25.649L80.1591 39.2884H89.5235L75.2965 19.0729Z"
								fill="#19E280"
							/>
							<path
								d="M23.6067 21.2338V28.8415H28.479C26.2576 31.0332 23.2232 32.3924 19.874 32.3924C13.084 32.3924 7.56039 26.8335 7.56039 20C7.56039 13.1665 13.084 7.60763 19.874 7.60763C25.6052 7.60763 30.435 11.5698 31.8009 16.9143H39.5099C38.0303 7.34701 29.7892 0 19.8729 0C8.91534 0 0 8.97234 0 20C0 31.0277 8.91534 40 19.8729 40C24.6273 40 28.9926 38.3076 32.4149 35.4935V39.2896H39.9742V21.2338H23.6067Z"
								fill="#19E280"
							/>
						</svg>
					</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<div className="navbar-nav gap-5">
						<Link href="/about">
							<a className={colorChange ? 'nav-link text-dark' : 'nav-link text-light'}>About</a>
						</Link>
						<Link href="/team">
							<a className={colorChange ? 'nav-link text-dark' : 'nav-link text-light'}>Team</a>
						</Link>
						<Link href="/news">
							<a className={colorChange ? 'nav-link text-dark' : 'nav-link text-light'}>News</a>
						</Link>
						<Link href="/faq">
							<a className={colorChange ? 'nav-link text-dark' : 'nav-link text-light'}>FAQ</a>
						</Link>
						<Link href="/contact">
							<a className={colorChange ? 'nav-link text-dark' : 'nav-link text-light'}>Contact</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
