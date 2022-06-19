/* eslint-disable react/prop-types */
import React from "react";
import "./button.css";
import {
	FaAngleLeft,
	FaAngleRight,
} from "react-icons/fa";

/* eslint-disable react/button-has-type */
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
			<FaAngleLeft />
			{text}
		</button>
	);
}
/* eslint-disable react/button-has-type */

/* eslint-disable react/button-has-type */
export function ButtonRight({ text, type }) {
	return (
		<button className="button" type={type}>
			{text}
			<FaAngleRight />
		</button>
	);
} /* eslint-disable react/button-has-type */
