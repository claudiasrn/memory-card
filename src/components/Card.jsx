import getArtwork from "../utils/metApi";
import { useEffect, useState } from "react";

export default function Card({ id, handleClick }) {
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
		<div className="card" onClick={() => handleClick(id)}>
			<img src={image} />
			<p>{title}</p>
		</div>
	) : (
		<p>Loading</p>
	);
}
