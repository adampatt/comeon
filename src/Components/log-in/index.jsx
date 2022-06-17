/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
	useEffect,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

const userSignInDetails = {
	name: "",
	password: "",
};

export default function Login() {
	const { authplayerData, setAuthSetPlayerData } =
		useAuth();

	const navigate = useNavigate();
	const [signInDetails, setSignInDetails] =
		useState(userSignInDetails);
	useEffect(() => {
		if (authplayerData.status === "success") {
			navigate("/gameslist");
		}
	}, [authplayerData]);

	const LoginFunc = (data) => {
		const { name, password } = data;
		fetch("http://localhost:3001/login", {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: `${name}`,
				password: `${password}`,
			}),
		})
			.then((response) => response.json())
			.then((actualData) =>
				setAuthSetPlayerData(actualData)
			)
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		LoginFunc(signInDetails);
	};

	const handleChange = (event) => {
		const inputValue = event.target.value;
		setSignInDetails({
			...signInDetails,
			[event.target.name]: inputValue,
		});
	};

	return (
		<div>
			{authplayerData.status === "fail" ? (
				<h2>{authplayerData.error}</h2>
			) : null}

			<h1>Log-in</h1>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					value={signInDetails.name}
					name="name"
					onChange={handleChange}
				/>
				<label>Password</label>
				<input
					type="password"
					value={signInDetails.password}
					name="password"
					onChange={handleChange}
				/>
				<button type="submit" id="sign-in-btn">
					Sign-In
				</button>
			</form>
		</div>
	);
}
