/* eslint-disable no-nested-ternary */
import React, {
	useEffect,
	useState,
} from "react";
import GamesCard from "./gamesCard";
import CategoryList from "./categoryList";
import SearchBar from "./searchBar";
import Navigation from "../navigation";

export default function GamesList() {
	const [games, setGames] = useState([]);
	const [catList, setCatList] = useState(false);
	const [searchBar, setSearchBar] =
		useState(false);
	const [listSelection, setListSelection] =
		useState("");
	const [searchBarResult, setSearchBarResult] =
		useState("");

	useEffect(() => {
		fetch("http://localhost:3001/games", {
			method: "get",
		})
			.then((res) => res.json())
			.then((data) => setGames(data));
	}, []);

	const OnListHander = () => {
		setSearchBar(false);
		setCatList(true);
	};

	const SearchBarDataSelection = () => {
		setSearchBar(true);
		setCatList(false);
	};

	const gamesList = games.filter((g) =>
		g.categoryIds.includes(listSelection)
	);

	const searchBarGames = games.filter(
		(g) =>
			g.name.includes(searchBarResult) ||
			g.code.includes(searchBarResult) ||
			g.description.includes(searchBarResult)
	);
	return (
		<div>
			<Navigation />
			{catList ? (
				gamesList.map((gameData) => (
					<GamesCard
						categoryIds={gameData.categoryIds}
						description={gameData.description}
						code={gameData.code}
						icon={gameData.icon}
						name={gameData.name}
					/>
				))
			) : searchBar ? (
				<div>
					{searchBarGames.map((gameData) => (
						<GamesCard
							categoryIds={gameData.categoryIds}
							description={gameData.description}
							code={gameData.code}
							icon={gameData.icon}
							name={gameData.name}
						/>
					))}
				</div>
			) : (
				games.map((gameData) => (
					<GamesCard
						categoryIds={gameData.categoryIds}
						description={gameData.description}
						code={gameData.code}
						icon={gameData.icon}
						name={gameData.name}
					/>
				))
			)}
			<CategoryList
				listSelect={OnListHander}
				searchWord={listSelection}
				setListSelection={setListSelection}
			/>
			<SearchBar
				setSearchBarResult={setSearchBarResult}
				SearchBarDataSelection={
					SearchBarDataSelection
				}
				searchBarResult={searchBarResult}
			/>
		</div>
	);
}
