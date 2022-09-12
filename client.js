import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: '6th4i42j', // you can find this in sanity.json
	dataset: 'production', // or the name you chose in step 1
	apiVersion: '2022-09-09',
	useCdn: true, // `false` if you want to ensure fresh data
});
