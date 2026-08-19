import getArtwork from "../utils/metApi";
import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ id, handleClick }) {
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadArtwork() {
			const data = await getArtwork(id);
			setIsLoading(false);
			setTitle(data.title);
			setYear(data.year);
			setImage(data.imageUrl);
		}

		loadArtwork();
	}, [id]);

	return (
		<div className="card">
			<div className="card-image-frame">
				{isLoading ? (
					<div className="card-placeholder" />
				) : (
					<button className="card-image-button" onClick={() => handleClick(id)}>
						<img src={image} alt={title} />
					</button>
				)}
			</div>
			<div className="card-plate">
				{isLoading ? (
					<p className="title">···</p>
				) : (
					<>
						<p className="title">{title}</p>
						<p className="year">Van Gogh, {year}</p>
					</>
				)}
			</div>
		</div>
	);
}
