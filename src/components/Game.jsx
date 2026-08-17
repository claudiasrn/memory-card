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
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedIDs, setClickedIDs] = useState(() => new Set());

	function handleCardClick(objectID) {
		if (clickedIDs.has(objectID)) {
			if (bestScore < score) {
				setBestScore(score);
			}
			setScore(0);
			setClickedIDs(new Set());
		} else {
			const newClickedIDs = new Set(clickedIDs);
			newClickedIDs.add(objectID);
			setClickedIDs(newClickedIDs);
			setScore(score + 1);
		}

        setRoundIDs(shuffle(curatedObjectIDs));
	}

	return (
		<div className="game">
			{roundIDs.map((id) => {
				return <Card key={id} id={id} handleClick={handleCardClick} />;
			})}
		</div>
	);
}
