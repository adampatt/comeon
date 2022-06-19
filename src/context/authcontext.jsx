import * as React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const authuserDetails = {
	Player: { avatar: "", event: "", name: "" },
	status: "",
	error: "",
};

const AuthContext = React.createContext(
	authuserDetails
);

export const useAuth = () =>
	React.useContext(AuthContext);

export function AuthProvider({ children }) {
	const [authplayerData, authsetPlayerData] =
		React.useState(authuserDetails);

	const setAuthSetPlayerData = (data) => {
		authsetPlayerData(data);
	};

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		authplayerData,
		setAuthSetPlayerData,
	};
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

export function ProtectedRoute({ children }) {
	const { authplayerData } = useAuth();

	if (authplayerData.status !== "success") {
		return <Navigate to="/" />;
	}

	return children;
}

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};
ProtectedRoute.propTypes = {
	children: PropTypes.element.isRequired,
};
