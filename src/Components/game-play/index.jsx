import React, { useEffect } from "react";
import "./comeon.game-1.0.min";
import {
	useParams,
	Link,
} from "react-router-dom";
import { ButtonLeft } from "../button";
import "./gameplay.css";

function GamePlay() {
	const { code } = useParams();
	useEffect(
		() => window.comeon.game.launch(code),
		[code]
	);

	return (
		<div className="gameplayContainer">
			<Link to="/gameslist">
				<ButtonLeft text="Go back" type="button" />
			</Link>
			<div className="gameLaunchContainer">
				<div id="game-launch" />
			</div>
		</div>
	);
}

export default GamePlay;
