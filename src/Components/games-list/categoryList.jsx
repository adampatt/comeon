import React, {
	useState,
	useEffect,
} from "react";
import PropTypes from "prop-types";
import "./categoryList.css";

export default function CategoryList({
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
		<div className="catlistContainer">
			<h3>Categories</h3>
			<hr />
			<div className="buttonholder">
				{categories.map((c) => (
					<button
						className="catbutton"
						type="button"
						key={c.name}
						onClick={() => {
							listSelect();
							setListSelection(c.id);
						}}
					>
						<h3>{c.name}</h3>
					</button>
				))}
			</div>
		</div>
	);
}

CategoryList.propTypes = {
	listSelect: PropTypes.string.isRequired,
	setListSelection: PropTypes.func.isRequired,
};
