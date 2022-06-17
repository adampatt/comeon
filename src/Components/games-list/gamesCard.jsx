/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function GamesCard({
	description,
	icon,
	name,
	code,
}) {
	return (
		<div>
			<p>Icon {icon}</p>
			<p>Name: {name}</p>
			<p>Description:{description}</p>
			<p>
				link{" "}
				<Link to={`/gameplay/${code}`}>Hello</Link>
			</p>
		</div>
	);
}
