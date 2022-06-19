/* eslint-disable react/prop-types */
import React from "react";
import ProfileWidget from "../profile-widget";
import SearchBar from "../searchbar";
import { ButtonLeft } from "../button";
import { useAuth } from "../../context/authcontext";
import "./navigation.css";

function Navigation({
	setSearchBarResult,
	SearchBarDataSelection,
	searchBarResult,
}) {
	const { authplayerData, setAuthSetPlayerData } =
		useAuth();

	const onLogoutHandler = () => {
		setAuthSetPlayerData(
			(authplayerData.status = "")
		);
	};

	return (
		<div className="navigationContainer">
			<div className="profileButtonContainer">
				<ProfileWidget />
				<div className="buttonHolder">
					<ButtonLeft
						type="button"
						text="Log Out"
						onClick={() => onLogoutHandler()}
					/>
				</div>
			</div>
			<SearchBar
				searchBarResult={searchBarResult}
				SearchBarDataSelection={
					SearchBarDataSelection
				}
				setSearchBarResult={setSearchBarResult}
			/>
		</div>
	);
}

export default Navigation;
