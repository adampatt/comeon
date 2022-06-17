/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, {
	useState,
	useEffect,
} from "react";

export default function CategoryList({
	listSelection,
	listSelect,
	setListSelection,
}) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/categories", {
			method: "get",
		})
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div>
			{categories.map((c) => (
				<div
					key={c.name}
					onClick={() => {
						listSelect();
						setListSelection(c.id);
					}}
				>
					{c.name}
				</div>
			))}
			<h1>{listSelection} listSelection</h1>
		</div>
	);
}
