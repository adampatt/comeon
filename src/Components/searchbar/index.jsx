/* eslint-disable react/prop-types */
import React, {
	useState,
	useEffect,
} from "react";
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
