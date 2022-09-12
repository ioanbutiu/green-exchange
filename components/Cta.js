import React from 'react';
import Link from 'next/link';

export default function Cta(props) {
	const { title, route, link, color } = props;
	let ctaColor = '#ff704a';
	if (color) {
		ctaColor = color;
	}
	if (route) {
		return (
			<Link href={`/${route._ref}`}>
				<a className="text-link" style={{ color: `${ctaColor}` }}>
					{title}
				</a>
			</Link>
		);
	}

	if (link) {
		return (
			<a className="text-link" href={link}>
				{title}
			</a>
		);
	}

	return <a className="text-link">{title}</a>;
}
