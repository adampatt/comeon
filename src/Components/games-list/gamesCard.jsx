/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { ButtonRight } from "../button";
import "./gameslist.css";

export default function GamesCard({
	description,
	icon,
	name,
	code,
}) {
	return (
		<div className="cardContainer">
			<div className="imgContainer">
				<img
					src={require(`../../${icon}`)}
					alt={name}
					className="ssa"
				/>
			</div>
			<div className="textHolder">
				<h3>{name}</h3>
				<p>{description}</p>
				<Link to={`/gameplay/${code}`}>
					<ButtonRight type="button" text="Play" />
				</Link>
			</div>
		</div>
	);
}
