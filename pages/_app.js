import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// import * as ga from '../lib/ga';

function App({ Component, pageProps }) {
	// const router = useRouter();

	// useEffect(() => {
	// 	const handleRouteChange = (url) => {
	// 		ga.pageview(url);
	// 	};
	// 	//When the component is mounted, subscribe to router changes
	// 	//and log those page views
	// 	router.events.on('routeChangeComplete', handleRouteChange);

	// 	// If the component is unmounted, unsubscribe
	// 	// from the event with the `off` method
	// 	return () => {
	// 		router.events.off('routeChangeComplete', handleRouteChange);
	// 	};
	// }, [router.events]);
	return (
		<Layout>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id="google-analytics" strategy="lazyOnload">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
			</Script>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
