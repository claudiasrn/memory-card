import Card from "./Card.jsx";
import "./Game.css";

export default function Game() {
	const curatedObjectIDs = [
		436528, 436530, 436524, 436535, 436534, 436533, 437138, 438008, 437107,
		437112, 437115, 438004,
	];

	return (
		<div className="game">
			{curatedObjectIDs.map((id) => {
				return (
					<Card
						key={id}
						id={id}
					/>
				);
			})}
		</div>
	);
}
