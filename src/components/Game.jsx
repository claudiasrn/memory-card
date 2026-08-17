import Card from "./Card.jsx";
import "./Game.css";
import shuffle from "../utils/shuffle.js";
import { useState } from "react";

const curatedObjectIDs = [
	436528, 436530, 436524, 436535, 436534, 436533, 437138, 438008, 437107,
	437112, 437115, 438004,
];

export default function Game() {
	const [roundIDs, setRoundIDs] = useState(() => shuffle(curatedObjectIDs));

	return (
		<div className="game">
			{roundIDs.map((id) => {
				return <Card key={id} id={id} />;
			})}
		</div>
	);
}
