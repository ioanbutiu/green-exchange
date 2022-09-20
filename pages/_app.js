import Head from 'next/head';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';

function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
