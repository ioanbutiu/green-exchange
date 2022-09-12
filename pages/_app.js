import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';

function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
