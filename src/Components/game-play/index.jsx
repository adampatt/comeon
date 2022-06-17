/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./comeon.game-1.0.min";
import {
	useParams,
	Link,
} from "react-router-dom";

function GamePlay() {
	const { code } = useParams();
	console.log(code);
	useEffect(
		() => window.comeon.game.launch(code),
		[code]
	);

	return (
		<div>
			<p>
				<Link to="/gameslist">Hello</Link>
			</p>
			<div>helo</div>
			<div id="game-launch"> </div>
			<h1>Hello</h1>;
		</div>
	);
}
export default GamePlay;
