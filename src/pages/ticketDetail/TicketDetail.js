import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcumbs from "../../components/Breadcumbs";
import Tickets from "../../assets/data/dummyData.json";
import TicketHistory from "../../components/TicketHistory/TicketHistory";
import ReplyToClient from "../../components/ReplyToClient";

const ticket = Tickets[0];
const TicketDetail = () => {
	const [message, setMessage] = useState("");

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMessage(value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		alert("Reply submitted");
	};

	useEffect(() => {}, [message]);

	return (
		<Container>
			<Row>
				<Col>
					<Breadcumbs page="Ticket" />
				</Col>
			</Row>
			<Row>
				<Col className="text-weight-border text-secondary">
					<div className="subject">Subject : {ticket.subject}</div>
					<div className="date">Ticket Opened : {ticket.date}</div>
					<div className="status">Status : {ticket.status}</div>
				</Col>
				<Col className="text-end">
					<Button variant="outline-info">Close Ticket</Button>
				</Col>
			</Row>
			<hr />
			<Row className="mt-4">
				<Col>
					<TicketHistory msg={ticket.history} />
				</Col>
			</Row>
			<hr />
			<Row className="mt-4">
				<Col>
					<ReplyToClient
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
						message={message}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default TicketDetail;
