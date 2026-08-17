export default async function getArtwork(id) {
	const response = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
	);
	const data = await response.json();

	return {
		title: data.title,
		imageUrl: data.primaryImageSmall,
	};
}
