import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import "./index.css";
import Login from "./Components/log-in";
import GamePlay from "./Components/game-play";
import GamesList from "./Components/games-list";
import {
	AuthProvider,
	ProtectedRoute,
} from "./context/authcontext";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);

root.render(
	<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="gameslist"
					element={
						<ProtectedRoute>
							<GamesList />
						</ProtectedRoute>
					}
				/>
				<Route path="gameplay">
					<Route
						path=":code"
						element={
							<ProtectedRoute>
								<GamePlay />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	</BrowserRouter>
);
