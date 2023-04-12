import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TicketTable from "../../components/TicketTable/TicketTable";
import Tickets from "../../assets/data/dummyData.json";
import Breadcumbs from "../../components/Breadcumbs";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<Row>
				<Col>
					<Breadcumbs page="Dashboard" />
				</Col>
			</Row>
			<Row>
				<Col className="text-center mt-5 mb-2">
					<Button
						variant="info"
						style={{ fontSize: "2rem", padding: "10px 30px", color: "white" }}
						onClick={() => navigate("/add-ticket")}
					>
						Add New Ticket
					</Button>
				</Col>
			</Row>
			<Row>
				<Col className="text-center mb-2">
					<div>Total Ticket: 50</div>
					<div>Pending Ticket: 10</div>
				</Col>
			</Row>
			<Row>
				<Col className="mt-2">Recently Added Tickets</Col>
			</Row>
			<hr />
			<Row>
				<Col className="recent-ticket">
					<TicketTable Tickets={Tickets} />
				</Col>
			</Row>
		</Container>
	);
};

export default DashboardPage;
