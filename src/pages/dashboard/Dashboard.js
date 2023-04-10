import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Dashboard.css";
import Login from "../../components/Login/Login";

const Dashboard = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleOnChange = (e) => {
		const { email, password } = e.target;
		console.log(email, password);
	};

	return (
		<div className="dashboard-page bg-info">
			<Card className="card-box">
				<Login
					handleOnChange={handleOnChange}
					email={email}
					password={password}
				/>
			</Card>
		</div>
	);
};

export default Dashboard;
