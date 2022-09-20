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
		<div className="container">
			<div className={direction ? 'my-2 py-2 py-md-5 my-md-5 row' : 'py-5 my-5 row flex-row-reverse'}>
				<div
					className={
						direction
							? 'd-flex flex-column justify-content-center align-items-start col-12 col-md-6 '
							: 'd-flex flex-column justify-content-center align-items-start col-12 col-md-6 '
					}>
					<h4 className="mb-4">{text}</h4>
					<div className="mb-4 mb-md-1">
						<Cta {...cta} />
					</div>
				</div>
				{image && <img src={urlFor(image).auto('format').url()} className="col-12 col-lg-6" />}
			</div>
		</div>
	);
}
