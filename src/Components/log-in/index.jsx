import React, {
	useEffect,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { ButtonRight } from "../button";
import "./login.css";

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
				alert(error);
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
		<div className="formcontainer">
			<h2>Log-in</h2>
			<form
				onSubmit={handleSubmit}
				className="signinForm"
			>
				<label
					className="signinLabel"
					htmlFor="signInName"
				>
					<h3>Name</h3>

					<input
						className="signinInput"
						type="text"
						value={signInDetails.name}
						name="name"
						onChange={handleChange}
						id="signInName"
					/>
				</label>
				<label
					className="signinLabel"
					htmlFor="signInPassword"
				>
					<h3>Password</h3>

					<input
						className="signinInput"
						type="password"
						value={signInDetails.password}
						name="password"
						onChange={handleChange}
						id="signInPassword"
					/>
				</label>
				<ButtonRight
					type="submit"
					id="sign-in-btn"
					text="Sign-In"
				>
					Sign-In
				</ButtonRight>
			</form>
			<div className="errorText">
				{authplayerData.status === "fail" ? (
					<p>
						The {authplayerData.error} please try again.
					</p>
				) : null}
			</div>
		</div>
	);
}
