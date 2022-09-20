import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import * as ga from '../lib/ga';

function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		// Initialize Fathom when the app loads
		// Example: yourdomain.com
		//  - Do not include https://
		//  - This must be an exact match of your domain.
		//  - If you're using www. for your domain, make sure you include that here.
		Fathom.load('MMRXHNOJ', {
			includedDomains: ['thegix.com', 'greenexchange.us'],
		});

		function onRouteChangeComplete() {
			Fathom.trackPageview();
		}
		// Record a pageview when route changes
		router.events.on('routeChangeComplete', onRouteChangeComplete);

		// Unassign event listener
		return () => {
			router.events.off('routeChangeComplete', onRouteChangeComplete);
		};
	}, []);

	// useEffect(() => {
	// 	const handleRouteChange = (url) => {
	// 		ga.pageview(url);
	// 	};
	// 	router.events.on('routeChangeComplete', handleRouteChange);
	// 	router.events.on('hashChangeComplete', handleRouteChange);
	// 	return () => {
	// 		router.events.off('routeChangeComplete', handleRouteChange);
	// 		router.events.off('hashChangeComplete', handleRouteChange);
	// 	};
	// }, [router.events]);
	return (
		<Layout>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_TRACKING_ID}`} />
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/> */}

			{/* <Script
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
			</Script> */}
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
