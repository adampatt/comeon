/* eslint-disable react/prop-types */
import React, {
	useState,
	useEffect,
} from "react";
import useDebounce from "../../hooks/useDebounce";

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
				placeholder="Search Game"
				onChange={(e) =>
					setSearchTerm(e.target.value)
				}
				onFocus={() => {
					SearchBarDataSelection();
				}}
			/>
			<p>{debouncedSearchTerm}</p>
			<p>{}</p>
		</div>
	);
}

export default SearchBar;
