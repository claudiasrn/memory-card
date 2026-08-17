import getArtwork from "../utils/metApi";
import { useEffect, useState } from "react";

export default function Card({ id }) {
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadArtwork() {
			const data = await getArtwork(id);
			setIsLoading(false);
			setTitle(data.title);
			setImage(data.imageUrl);
		}

		loadArtwork();
	}, [id]);

	return !isLoading ? (
		<div className="card">
			<img src={image} />
			<p>{title}</p>
		</div>
	) : (
		<p>Loading</p>
	);
}
