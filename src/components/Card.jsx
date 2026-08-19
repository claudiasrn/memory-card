import getArtwork from "../utils/metApi";
import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ id, handleClick }) {
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		async function loadArtwork() {
			try {
				const data = await getArtwork(id);
				setTitle(data.title);
				setYear(data.year);
				setImage(data.imageUrl);
			} catch (error) {
				console.error("Failed to load artwork:", error);
				setHasError(true);
			} finally {
				setIsLoading(false);
			}
		}

		loadArtwork();
	}, [id]);

	return (
		<div className="card">
			<div className="card-image-frame">
				{isLoading ? (
					<div className="card-placeholder" />
				) : hasError ? (
					<div className="card-error">unavailable</div>
				) : (
					<button className="card-image-button" onClick={() => handleClick(id)}>
						<img src={image} alt={title} />
					</button>
				)}
			</div>
			<div className="card-plate">
				{isLoading ? (
					<p className="title">···</p>
				) : hasError ? (
					<p className="title">—</p>
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
