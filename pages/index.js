import Head from 'next/head';
import Image from 'next/image';
import client from '../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

import Hero from '../components/Hero';
import JoinUs from '../components/JoinUs';
import Newsletter from '../components/Newsletter';
import ImageSection from '../components/ImageSection';
import ImageWide from '../components/ImageWide';

function urlFor(source) {
	if (source) {
		return imageUrlBuilder(client).image(source);
	} else return null;
}

export default function Home(props) {
	const { title, hero, imageSectionOne, imageSectionTwo, iconRow, imageWide } = props;
	return (
		<div className="container-fluid p-0">
			{/* <Head>
				<title>{title}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head> */}
			<div
				className="container-fluid p-0 mb-5"
				style={{
					minhHeight: '75vh',
					overflow: 'hidden',
					position: 'relative',
				}}>
				{/* <video
					className="d-none d-md-block w-100"
					autoPlay
					loop
					muted
					poster="/home-video-poster.webp"
					src="https://www.dropbox.com/s/4moevow4u68l253/home-hero-comp.mp4?raw=1"
					style={{
						position: 'absolute',
						minWidth: '100%',
						minHeight: '100%',
						top: '48%',
						transform: 'translateY(-50%)',
						margin: '0',
						zIndex: '-100',
						objectFit: 'cover',
					}}></video> */}
				{/* <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
					<iframe
						src="https://player.vimeo.com/video/748801319?h=71230c8e13&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
						frameborder="0"
						allow="autoplay; fullscreen; picture-in-picture"
						style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
						title="Pre-comp 2"></iframe>
				</div> */}

				<div
					className="d-block w-100"
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: '-100',
						backgroundSize: 'cover',
						backgroundPosition: '10% 50%',
						backgroundImage: 'url(/gix-icon-water.webp)',
					}}></div>

				<div className="position-relative" style={{ top: '0', zIndex: '-100' }}>
					<div className="d-none d-md-block" style={{ padding: '56.25% 0 0 0', zIndex: '-100' }}>
						<iframe
							src="https://player.vimeo.com/video/748801319?h=71230c8e13&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
							frameborder="0"
							allow="autoplay"
							style={{
								position: 'absolute',
								border: '0',
								top: '0',
								right: '0',
								width: '100%',
								height: '100%',
								zIndex: '-200',
							}}
							title="Pre-comp 2"></iframe>
					</div>
					<script src="https://player.vimeo.com/api/player.js"></script>
				</div>

				<div
					className="container h-100 py-4 text-light d-flex flex-column justify-content-end bg-transparent position-absolute"
					style={{ zIndex: '100', top: '0', width: '100%', right: '0', left: '0' }}>
					<div className="">
						<div>
							{' '}
							<h1 className="m-0" style={{ lineHeight: '1' }}>
								The Green
							</h1>
							<h1 className="display-1" style={{ lineHeight: '1' }}>
								Impact Exchange
							</h1>{' '}
						</div>

						<div className="mt-4 mb-4">
							<p className="lead d-block col-12 col-lg-7">
								A new listing and trading venue for the securities of companies that commit to good green governance
							</p>
						</div>
					</div>
				</div>
			</div>
			<main className="">
				<ImageSection direction={true} props={imageSectionOne} />
				<div className="container py-5">
					<h4 className="display-4">Our solution: measure what matters</h4>
					{iconRow && (
						<div className="row">
							{iconRow.map((icon) => (
								<div key={icon._key} className="col-12 col-md-3 mt-0 mt-md-4">
									<div className="d-flex justify-content-between align-items-center my-md-4 pe-0 pe-md-4" style={{}}>
										<img src={urlFor(icon.icon)} className="mx-auto mx-md-0 w-50" style={{}}></img>
										<img src={urlFor(icon.symbol)} className="d-none d-md-block" style={{}}></img>
									</div>
									<h6 className="display-6 pt-0 pt-md-4">{icon.heading}</h6>
									<p>{icon.text}</p>
								</div>
							))}
						</div>
					)}
				</div>
				<ImageWide {...imageWide} />
				<div className="container-fluid pt-3 pb-5 py-md-5 bg-light" style={{ overflow: 'hidden' }}>
					<div
						className="d-flex justify-content-start align-items-center scrolling-text"
						style={{ overflow: 'visible', width: 'max-content' }}>
						<svg
							width="160"
							height="160"
							viewBox="0 0 160 160"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ minWidth: '160', minHeight: '160' }}>
							<rect width="160" height="160" fill="transparent" />
							<path
								d="M145 70H140V50H130V70H120V50H110V70H105C103.674 70 102.402 70.5268 101.464 71.4645C100.527 72.4021 100 73.6739 100 75V95C100.008 100.76 102.001 106.342 105.644 110.804C109.287 115.266 114.358 118.335 120 119.494V135C119.999 136.326 119.472 137.597 118.534 138.534C117.597 139.472 116.326 139.999 115 140H25C23.6739 140 22.4021 139.473 21.4645 138.536C20.5268 137.598 20 136.326 20 135C20 133.674 20.5268 132.402 21.4645 131.464C22.4021 130.527 23.6739 130 25 130H50C53.9782 130 57.7936 128.42 60.6066 125.607C63.4196 122.794 65 118.978 65 115C65 111.022 63.4196 107.206 60.6066 104.393C57.7936 101.58 53.9782 100 50 100H25C23.6739 100 22.4021 99.4732 21.4645 98.5355C20.5268 97.5979 20 96.3261 20 95C20 93.6739 20.5268 92.4021 21.4645 91.4645C22.4021 90.5268 23.6739 90 25 90H50C53.9769 89.9956 57.7897 88.4139 60.6018 85.6018C63.4139 82.7897 64.9956 78.9769 65 75V55H70C75.3025 54.994 80.3861 52.885 84.1356 49.1356C87.885 45.3861 89.994 40.3025 90 35V20H75C69.8808 20.0084 64.9618 21.9897 61.266 25.532C58.6759 20.8316 54.8731 16.9115 50.2536 14.1799C45.6341 11.4482 40.3667 10.0048 35 10H20V25C20.0087 32.9538 23.1722 40.5794 28.7964 46.2036C34.4206 51.8278 42.0462 54.9913 50 55H55V75C54.9989 76.3258 54.4718 77.5969 53.5344 78.5344C52.5969 79.4718 51.3258 79.9989 50 80H25C21.0218 80 17.2064 81.5804 14.3934 84.3934C11.5804 87.2064 10 91.0218 10 95C10 98.9782 11.5804 102.794 14.3934 105.607C17.2064 108.42 21.0218 110 25 110H50C51.3261 110 52.5979 110.527 53.5355 111.464C54.4732 112.402 55 113.674 55 115C55 116.326 54.4732 117.598 53.5355 118.536C52.5979 119.473 51.3261 120 50 120H25C21.0218 120 17.2064 121.58 14.3934 124.393C11.5804 127.206 10 131.022 10 135C10 138.978 11.5804 142.794 14.3934 145.607C17.2064 148.42 21.0218 150 25 150H115C118.977 149.996 122.79 148.414 125.602 145.602C128.414 142.79 129.996 138.977 130 135V119.494C135.642 118.335 140.713 115.266 144.356 110.804C147.999 106.342 149.992 100.76 150 95V75C150 73.6739 149.473 72.4021 148.536 71.4645C147.598 70.5268 146.326 70 145 70ZM65 40C65.0026 37.3486 66.0571 34.8066 67.9319 32.9319C69.8066 31.0571 72.3486 30.0026 75 30H80V35C79.9974 37.6514 78.9429 40.1934 77.0681 42.0681C75.1934 43.9429 72.6514 44.9974 70 45H65V40ZM50 45C44.6975 44.994 39.6139 42.885 35.8644 39.1356C32.115 35.3861 30.006 30.3025 30 25V20H35C40.3025 20.006 45.3861 22.115 49.1356 25.8644C52.885 29.6139 54.994 34.6975 55 40V45H50ZM140 95C140 98.9782 138.42 102.794 135.607 105.607C132.794 108.42 128.978 110 125 110C121.022 110 117.206 108.42 114.393 105.607C111.58 102.794 110 98.9782 110 95V80H140V95Z"
								fill="#19E280"
							/>
						</svg>

						<span
							className="text-primary"
							style={{ fontSize: '180px', lineHeight: '1', whiteSpace: 'nowrap', margin: '0rem 2rem' }}>
							Tomorrow's blue chips
						</span>
						<svg
							width="160"
							height="160"
							viewBox="0 0 160 160"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ minWidth: '160', minHeight: '160' }}>
							<rect width="160" height="160" fill="transparent" />
							<path
								d="M150 80.0002C150.034 64.5804 144.987 49.5788 135.639 37.3154C126.292 25.0519 113.164 16.2097 98.2867 12.1561C83.4092 8.10245 67.6107 9.06324 53.334 14.8899C39.0574 20.7165 27.0981 31.0843 19.3054 44.3902C11.5127 57.696 8.32079 73.1986 10.2232 88.5006C12.1257 103.803 19.0165 118.052 29.8301 129.044C40.6437 140.037 54.7777 147.161 70.0465 149.314C85.3152 151.467 100.868 148.53 114.3 140.957L114.883 141.084L115.007 140.528C125.634 134.392 134.461 125.57 140.602 114.946C146.744 104.323 149.985 92.2712 150 80.0002ZM20.0001 80.0002C20.0194 74.9366 20.6831 69.8961 21.9751 65.0002H43.1911L68.1501 85.8002L58.6041 98.5297C57.1684 100.459 56.4725 102.839 56.6427 105.237C56.8129 107.636 57.8379 109.894 59.5316 111.601L70.0001 122.071V139.097C56.0341 136.727 43.3557 129.495 34.206 118.681C25.0563 107.867 20.0245 94.1658 20.0001 80.0002ZM66.6001 104.531L81.8501 84.2002L46.8091 55.0002H25.5276C29.1754 46.9984 34.5429 39.8996 41.2477 34.2092C47.9525 28.5189 55.8296 24.3771 64.318 22.0789C72.8063 19.7806 81.6971 19.3825 90.3569 20.9128C99.0167 22.4432 107.233 25.8644 114.419 30.9327L111.397 40.0002H82.9296L67.7151 55.2152L114.483 96.7822L106.24 133.875C98.0767 137.896 89.1 139.991 80.0001 140V117.93L66.6001 104.531ZM118.175 126.253L124.242 98.9527C124.627 97.214 124.541 95.404 123.993 93.7096C123.445 92.0152 122.455 90.4978 121.124 89.3142L82.2851 54.7852L87.0706 50.0002H111.397C113.496 50.0017 115.542 49.3418 117.246 48.1143C118.949 46.8867 120.222 45.1538 120.884 43.1617L122.65 37.8617C128.513 43.7777 133.077 50.8517 136.052 58.6316C139.026 66.4114 140.345 74.7262 139.924 83.0446C139.503 91.363 137.351 99.5021 133.607 106.942C129.862 114.382 124.605 120.959 118.175 126.253Z"
								fill="#19E280"
							/>
						</svg>

						<span
							className="text-primary"
							style={{ fontSize: '180px', lineHeight: '1', whiteSpace: 'nowrap', margin: '0rem 2rem' }}>
							will be green
						</span>
						<svg
							width="160"
							height="160"
							viewBox="0 0 160 160"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ minWidth: '160', minHeight: '160' }}>
							<rect width="160" height="160" fill="transparent" />
							<path
								d="M150 130V70H65V130H90V140H10V150H150V140H125V130H150ZM125 120V105H140V120H125ZM115 105V120H100V105H115ZM100 95V80H115V95H100ZM140 95H125V80H140V95ZM90 80V95H75V80H90ZM75 120V105H90V120H75ZM115 140H100V130H115V140Z"
								fill="#19E280"
							/>
							<path
								d="M46.664 74.905C44.1779 72.6806 42.2877 69.8696 41.1655 66.7281C40.0434 63.5865 39.7248 60.2142 40.2389 56.918C40.753 53.6219 42.0835 50.5068 44.1091 47.8562C46.1347 45.2056 48.7911 43.1038 51.8365 41.7422C54.882 40.3805 58.2196 39.8023 61.5456 40.0601C64.8716 40.3179 68.0803 41.4035 70.8795 43.2182C73.6787 45.0329 75.9795 47.5189 77.5725 50.45C79.1655 53.3811 80 56.664 80 60H70C70 58.3319 69.5828 56.6903 68.7863 55.2247C67.9897 53.7591 66.8392 52.516 65.4395 51.6086C64.0398 50.7013 62.4354 50.1585 60.7723 50.0297C59.1092 49.9008 57.4403 50.1901 55.9175 50.8711C54.3948 51.5521 53.0666 52.6032 52.0539 53.9287C51.0411 55.2541 50.3761 56.8119 50.1192 58.4601C49.8624 60.1083 50.022 61.7945 50.5834 63.3653C51.1447 64.9361 52.0902 66.3415 53.3335 67.4535L46.664 74.905Z"
								fill="#19E280"
							/>
							<path d="M65 10H55V30H65V10Z" fill="#19E280" />
							<path d="M30 55H10V65H30V55Z" fill="#19E280" />
							<path d="M28.18 21.1089L21.1089 28.18L35.251 42.3221L42.3221 35.251L28.18 21.1089Z" fill="#19E280" />
							<path
								d="M77.6776 35.2512L84.7486 42.3223L98.8908 28.1802L91.8197 21.1091L77.6776 35.2512Z"
								fill="#19E280"
							/>
						</svg>

						<span
							className="text-primary"
							style={{ fontSize: '180px', lineHeight: '1', whiteSpace: 'nowrap', margin: '0rem 2rem' }}>
							Tomorrow's blue chips
						</span>
						<svg
							width="160"
							height="160"
							viewBox="0 0 160 160"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ minWidth: '160', minHeight: '160' }}>
							<rect width="160" height="160" fill="transparent" />
							<path d="M55 55V105H105V55H55ZM95 95H65V65H95V95Z" fill="#19E280" />
							<path
								d="M150 65V55H130V40C130 37.3478 128.946 34.8043 127.071 32.9289C125.196 31.0536 122.652 30 120 30H105V10H95V30H65V10H55V30H40C37.3478 30 34.8043 31.0536 32.9289 32.9289C31.0536 34.8043 30 37.3478 30 40V55H10V65H30V95H10V105H30V120C30 122.652 31.0536 125.196 32.9289 127.071C34.8043 128.946 37.3478 130 40 130H55V150H65V130H95V150H105V130H120C122.652 130 125.196 128.946 127.071 127.071C128.946 125.196 130 122.652 130 120V105H150V95H130V65H150ZM120 120H40V40H120V120Z"
								fill="#19E280"
							/>
						</svg>

						<span
							className="text-primary"
							style={{ fontSize: '180px', lineHeight: '1', whiteSpace: 'nowrap', margin: '0rem 2rem' }}>
							will be green
						</span>
						<svg
							width="160"
							height="160"
							viewBox="0 0 160 160"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ minWidth: '160', minHeight: '160' }}>
							<rect width="160" height="160" fill="transparent" />
							<path
								d="M130 65C135.303 64.994 140.386 62.885 144.136 59.1356C147.885 55.3861 149.994 50.3025 150 45V30H135C129.881 30.0084 124.962 31.9897 121.266 35.532C118.676 30.8316 114.873 26.9115 110.254 24.1799C105.634 21.4482 100.367 20.0048 95 20H80V35C80.0087 42.9538 83.1722 50.5794 88.7964 56.2036C94.4206 61.8278 102.046 64.9913 110 65H115V130H55V105H60C65.3025 104.994 70.3861 102.885 74.1356 99.1356C77.885 95.3861 79.994 90.3025 80 85V70H65C59.8808 70.0084 54.9618 71.9897 51.266 75.532C48.6759 70.8316 44.8731 66.9115 40.2536 64.1799C35.6341 61.4482 30.3667 60.0048 25 60H10V75C10.0087 82.9538 13.1722 90.5794 18.7964 96.2036C24.4206 101.828 32.0462 104.991 40 105H45V130H10V140H150V130H125V65H130ZM125 50C125.003 47.3486 126.057 44.8066 127.932 42.9319C129.807 41.0571 132.349 40.0026 135 40H140V45C139.997 47.6514 138.943 50.1934 137.068 52.0681C135.193 53.9429 132.651 54.9974 130 55H125V50ZM55 90C55.0026 87.3486 56.0571 84.8066 57.9319 82.9319C59.8066 81.0571 62.3486 80.0026 65 80H70V85C69.9974 87.6514 68.9429 90.1934 67.0681 92.0681C65.1934 93.9429 62.6514 94.9974 60 95H55V90ZM45 95H40C34.6975 94.994 29.6139 92.885 25.8644 89.1356C22.115 85.3861 20.006 80.3025 20 75V70H25C30.3025 70.006 35.3861 72.115 39.1356 75.8644C42.885 79.6139 44.994 84.6975 45 90V95ZM115 55H110C104.697 54.994 99.6139 52.885 95.8644 49.1356C92.115 45.3861 90.006 40.3025 90 35V30H95C100.303 30.006 105.386 32.115 109.136 35.8644C112.885 39.6139 114.994 44.6975 115 50V55Z"
								fill="#19E280"
							/>
						</svg>
					</div>
				</div>
				<ImageSection direction={true} props={imageSectionTwo} />
			</main>
			<JoinUs />
			<Newsletter />
		</div>
	);
}

const query = groq`*[_type == "home"][0]{title, hero, imageSectionOne, imageSectionTwo, iconRow, imageWide, metadata}`;

export async function getStaticProps(context) {
	const content = await client.fetch(query);
	return {
		props: {
			...content,
		},
	};
}
