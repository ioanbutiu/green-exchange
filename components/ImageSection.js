import React from 'react';
import Cta from './Cta';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default function ImageSection({ direction, props }) {
	const { text, image, cta } = props;
	return (
		<div className={direction ? 'container py-5 my-5 d-flex' : 'container py-5 my-5 d-flex flex-row-reverse'}>
			<div
				className={
					direction
						? 'd-flex flex-column justify-content-center align-items-start pe-5 w-50'
						: 'd-flex flex-column justify-content-center align-items-start ps-5 w-50'
				}>
				<h4 className="mb-4">{text}</h4>
				<Cta {...cta} />
			</div>
			{image && <img src={urlFor(image).url()} className="w-50" />}
		</div>
	);
}
