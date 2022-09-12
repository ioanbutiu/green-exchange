import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default function Hero(props) {
	const { heading, subheading, image } = props;
	return (
		<div
			className="container-fluid p-0 mb-5"
			style={{
				backgroundImage: `url(${urlFor(image).auto('format')})`,
				backgroundSize: 'cover',
				height: '60vh',
				minHeight: '500px',
				overflow: 'hidden',
			}}>
			<div className="container h-100 py-4 text-light d-flex flex-column justify-content-end bg-transparent">
				<div className="">
					<h1 className="">{heading}</h1>
				</div>
			</div>
		</div>
	);
}
