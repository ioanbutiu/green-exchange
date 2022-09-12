import React from 'react';
import Cta from './Cta';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default function ImageWide(props) {
	const { text, image, cta } = props;
	return (
		<div
			className="container-fluid my-5 d-flex text-light"
			style={{
				height: '90vh',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundImage: `url(${urlFor(image)})`,
			}}>
			<div className=" container d-flex flex-column justify-content-end align-items-start pb-5 mb-5">
				<h3 className="mb-4">{text}</h3>
				<Cta {...cta} color="#fff" />
			</div>
		</div>
	);
}
