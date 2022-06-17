/* eslint-disable react/prop-types */
import React from "react";
import "./button.css";

export default function Button({ text, arrow }) {
	return (
		<button className={arrow} type="button">
			{text}
		</button>
	);
}
