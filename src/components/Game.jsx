import Card from "./Card.jsx";
import "./Game.css";
import shuffle from "../utils/shuffle.js";
import { useState } from "react";

const curatedObjectIDs = [
	436528, 436534, 436533, 436535, 436524, 436530, 437980, 436525, 436532,
	436526, 436536, 437998,
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
