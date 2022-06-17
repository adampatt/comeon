/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
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
			<div>
				<img
					src={require(`../../${icon}`)}
					alt={name}
				/>
			</div>
			<div>
				<p>{name}</p>
				<p>{description}</p>
				<p>
					<Link to={`/gameplay/${code}`}>Play</Link>
				</p>
			</div>
		</div>
	);
}
