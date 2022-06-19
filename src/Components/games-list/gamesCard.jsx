/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from "react";
import PropTypes from "prop-types";
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

GamesCard.propTypes = {
	description: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	code: PropTypes.string.isRequired,
};
