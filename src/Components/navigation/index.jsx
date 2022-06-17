import React from "react";

import ProfileWidget from "../profile-widget";

function Navigation() {
	return (
		<div>
			<div>
				<ProfileWidget />
				<button type="button">Log out</button>
			</div>
			<div>
				<div>Searchbar</div>
			</div>
		</div>
	);
}

export default Navigation;
