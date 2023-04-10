import React from "react";
import { Card } from "react-bootstrap";
import "./Dashboard.css";
import Login from "../../components/Login/Login";

const Dashboard = () => {
	return (
		<div className="dashboard-page bg-info">
			<Card className="card-box">
				<Login />
			</Card>
		</div>
	);
};

export default Dashboard;
