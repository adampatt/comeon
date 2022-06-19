/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from "react";
import { useAuth } from "../../context/authcontext";
import "./profilewidget.css";

export default function ProfileWidget() {
	const { authplayerData } = useAuth();
	return (
		<div className="widgetContainer">
			<img
				src={require(`../../${authplayerData.player.avatar}`)}
				alt={authplayerData.player.name}
				className="widgetAvatar"
			/>
			<div className="widgetTextContainer">
				<h3>{authplayerData.player.name}</h3>
				<p>{authplayerData.player.event}</p>
			</div>
		</div>
	);
}
