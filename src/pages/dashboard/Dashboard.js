import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Dashboard.css";
import Login from "../../components/Login/Login";
import PasswordReset from "../../components/ResetPassword/PasswordReset";

const Dashboard = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formLoad, setFormLoad] = useState("login");

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			default:
				break;
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Please fill up all the form!");
		}
		//TODO call api to submit the form
		console.log(email, password);
	};

	const handleOnRestSubmit = (e) => {
		e.preventDefault();
		if (!email) {
			return alert("Please Enter Your Vaild Email.");
		}
		//TODO call api to submit the form
		console.log(
			"We sended a link, please click on that link and change your password",
			email
		);
	};

	const formLoader = (frmType) => {
		setFormLoad(frmType);
	};

	return (
		<div className="dashboard-page bg-info">
			<Card className="card-box">
				{formLoad === "login" && (
					<Login
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
						formLoader={formLoader}
						email={email}
						password={password}
					/>
				)}
				{formLoad === "reset" && (
					<PasswordReset
						handleOnChange={handleOnChange}
						handleOnRestSubmit={handleOnRestSubmit}
						formLoader={formLoader}
						email={email}
					/>
				)}
			</Card>
		</div>
	);
};

export default Dashboard;
