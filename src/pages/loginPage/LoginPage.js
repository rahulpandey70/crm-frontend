import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./LoginPage.css";
import Login from "../../components/Login/Login";
import PasswordReset from "../../components/ResetPassword/PasswordReset";

const LoginPage = () => {
	const [formLoad, setFormLoad] = useState("login");

	const handleOnRestSubmit = (e) => {
		e.preventDefault();
	};

	const formLoader = (frmType) => {
		setFormLoad(frmType);
	};

	return (
		<div className="login-page bg-info">
			<Card className="card-box">
				{formLoad === "login" && <Login formLoader={formLoader} />}
				{formLoad === "reset" && (
					<PasswordReset
						// handleOnChange={handleOnChange}
						handleOnRestSubmit={handleOnRestSubmit}
						formLoader={formLoader}
						// email={email}
					/>
				)}
			</Card>
		</div>
	);
};

export default LoginPage;
