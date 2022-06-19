/* eslint-disable react/button-has-type */

import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import {
	FaAngleLeft,
	FaAngleRight,
} from "react-icons/fa";

export function ButtonLeft({
	text,
	type,
	onClick,
}) {
	return (
		<button
			className="button"
			type={type}
			onClick={onClick}
		>
			<span className="arrowIcon">
				<FaAngleLeft />
			</span>
			{text}
		</button>
	);
}

export function ButtonRight({ text, type }) {
	return (
		<button className="button" type={type}>
			{text}
			<span className="arrowIcon">
				<FaAngleRight />
			</span>
		</button>
	);
}

ButtonLeft.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

ButtonRight.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};
