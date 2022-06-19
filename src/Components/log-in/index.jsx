/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
		<div className="formcontainer">
			<h2>Log-in</h2>
			<form
				onSubmit={handleSubmit}
				className="signinForm"
			>
				<label className="signinLabel">
					<h3>Name</h3>
				</label>
				<input
					className="signinInput"
					type="text"
					value={signInDetails.name}
					name="name"
					onChange={handleChange}
				/>
				<label className="signinLabel">
					<h3>Password</h3>
				</label>
				<input
					className="signinInput"
					type="password"
					value={signInDetails.password}
					name="password"
					onChange={handleChange}
				/>

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
