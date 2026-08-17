import Card from "./Card.jsx";
import "./Game.css"

export default function Game() {
	const fakeArtworks = [
		{
			objectID: 1,
			title: "Wheat Field with Cypresses",
			imageUrl:
				"https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
		},
		{
			objectID: 2,
			title: "Bread Plate",
			imageUrl:
				"https://images.metmuseum.org/CRDImages/ad/web-large/DP258638.jpg",
		},
		{
			objectID: 3,
			title: "Quail and Millet",
			imageUrl:
				"https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg",
		},
		{
			objectID: 4,
			title: "Funerary Coffin",
			imageUrl:
				"https://images.metmuseum.org/CRDImages/eg/web-large/12.182.132a-c_0032.jpg",
		},
	];

	return (
		<div className="game">
			{fakeArtworks.map((artwork) => {
				return (
					<Card
						key={artwork.objectID}
						url={artwork.imageUrl}
						title={artwork.title}
					/>
				);
			})}
		</div>
	);
}
