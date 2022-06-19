import React, {
	useState,
	useEffect,
} from "react";
import PropTypes from "prop-types";
import useDebounce from "../../hooks/useDebounce";
import "./searchbar.css";

function SearchBar({
	setSearchBarResult,
	SearchBarDataSelection,
}) {
	const [searchTerm, setSearchTerm] = useState("");

	const debouncedSearchTerm = useDebounce(
		searchTerm,
		500
	);

	useEffect(() => {
		setSearchBarResult(debouncedSearchTerm);
	}, [debouncedSearchTerm]);

	return (
		<div>
			<input
				className="searchbarInput"
				placeholder="Search Game"
				onChange={(e) =>
					setSearchTerm(e.target.value)
				}
				onFocus={() => {
					SearchBarDataSelection();
				}}
			/>
		</div>
	);
}

export default SearchBar;

SearchBar.propTypes = {
	setSearchBarResult: PropTypes.func.isRequired,
	SearchBarDataSelection:
		PropTypes.func.isRequired,
};
