import React from "react";
import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Header from "./Components/header";
import Login from "./Components/log-in";
import GamePlay from "./Components/game-play";
import GamesList from "./Components/games-list";
import {
	AuthProvider,
	ProtectedRoute,
} from "./context/authcontext";

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<div className="main">
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
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
