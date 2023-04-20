import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcumbs from "../../components/Breadcumbs";
import SearchForm from "../../components/Search/SearchForm";
import TicketTable from "../../components/TicketTable/TicketTable";
import Tickets from "../../assets/data/dummyData.json";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchAllTickets } from "../../redux-toolkit/actions/ticketActions";

const TicketList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchAllTickets());
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<Breadcumbs page="Ticket list" />
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<Button variant="info" onClick={() => navigate("/add-ticket")}>
						Add New Ticket
					</Button>
				</Col>
				<Col className="text-end">
					<SearchForm />
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<TicketTable />
				</Col>
			</Row>
		</Container>
	);
};

export default TicketList;
