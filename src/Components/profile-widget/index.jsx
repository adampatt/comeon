/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from "react";
import { useAuth } from "../../context/authcontext";

export default function ProfileWidget() {
	const { authplayerData } = useAuth();
	console.log(authplayerData);
	return (
		<div>
			<img
				src={require(`../../${authplayerData.player.avatar}`)}
				alt={authplayerData.player.name}
			/>
			<div>
				<h3>{authplayerData.player.name}</h3>
				<h4>{authplayerData.player.event}</h4>
			</div>
		</div>
	);
}
