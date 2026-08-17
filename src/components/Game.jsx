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
	const [hasWon, setHasWon] = useState(false);

	function handleCardClick(objectID) {
		if (clickedIDs.has(objectID)) {
			if (bestScore < score) {
				setBestScore(score);
			}
			setScore(0);
			setClickedIDs(new Set());
			setHasWon(false);
		} else {
			const newClickedIDs = new Set(clickedIDs);
			newClickedIDs.add(objectID);
			setClickedIDs(newClickedIDs);
			setScore(score + 1);

			if (newClickedIDs.size === curatedObjectIDs.length) {
				setHasWon(true);
			}
		}

		setRoundIDs(shuffle(curatedObjectIDs));
	}

	function handleRestart() {
		setBestScore(score);
		setScore(0);
		setClickedIDs(new Set());
		setHasWon(false);
		setRoundIDs(shuffle(curatedObjectIDs));
	}

	return (
		<div className="game-wrapper">
			<div className="header">
				<div className="header-text">
					<h1>Van Gogh memory</h1>
					<p>click each painting once, don't repeat</p>
				</div>
				<div className="header-stats">
					<div className="stat">
						<p className="stat-label">Score</p>
						<p className="stat-value">{score}</p>
					</div>
					<div className="stat">
						<p className="stat-label">Best</p>
						<p className="stat-value">{bestScore}</p>
					</div>
				</div>
			</div>
			{hasWon && (
				<div className="win-overlay">
					<div className="win-alert">
						<p className="win-alert-icon">✦</p>
						<p className="win-alert-title">Collection complete</p>
						<p className="win-alert-message">
							You remembered all 12 paintings
						</p>
						<button className="win-alert-button" onClick={handleRestart}>
							Play again
						</button>
					</div>
				</div>
			)}
			<div className="game">
				{roundIDs.map((id) => {
					return <Card key={id} id={id} handleClick={handleCardClick} />;
				})}
			</div>
		</div>
	);
}
