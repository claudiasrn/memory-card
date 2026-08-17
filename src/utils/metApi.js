const cache = new Map();

export default async function getArtwork(id) {
	if (cache.has(id)) {
		return cache.get(id);
	}

	const response = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
	);
	const data = await response.json();

	const result = {
		title: data.title,
		imageUrl: data.primaryImageSmall,
		year: data.objectDate,
	};

	cache.set(id, result);
	return result;
}
