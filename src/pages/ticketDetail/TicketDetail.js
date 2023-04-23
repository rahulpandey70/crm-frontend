import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import Breadcumbs from "../../components/Breadcumbs";
import TicketHistory from "../../components/TicketHistory/TicketHistory";
import ReplyToClient from "../../components/ReplyToClient";

import { fetchSingleTicket } from "../../redux-toolkit/actions/ticketActions";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const TicketDetail = () => {
	const { tId } = useParams();

	const dispatch = useDispatch();
	const { isLoading, error, selectedTicket } = useSelector(
		(state) => state.tickets
	);

	const [message, setMessage] = useState("");
	const [ticket, setTicket] = useState("");

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMessage(value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		alert("Reply submitted");
	};

	useEffect(() => {
		dispatch(fetchSingleTicket(tId));
	}, [message, tId, dispatch]);

	return (
		<Container>
			<Row>
				<Col>
					<Breadcumbs page="Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					{isLoading && <Spinner variant="primary" animation="border" />}
					{error && <Alert variant="danger">{error}</Alert>}
				</Col>
			</Row>
			<Row>
				<Col className="text-weight-border text-secondary">
					<div className="subject">Subject : {selectedTicket.subject}</div>
					<div className="date">Ticket Opened : {selectedTicket.openAt}</div>
					<div className="status">Status : {selectedTicket.status}</div>
				</Col>
				<Col className="text-end">
					<Button variant="outline-info">Close Ticket</Button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					{selectedTicket.conversations && (
						<TicketHistory msg={selectedTicket.conversations} />
					)}
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
