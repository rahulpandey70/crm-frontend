import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcumbs from "../../components/Breadcumbs";
import SearchForm from "../../components/Search/SearchForm";
import TicketTable from "../../components/TicketTable/TicketTable";
import Tickets from "../../assets/data/dummyData.json";
import { useNavigate } from "react-router-dom";

const TicketList = () => {
	const [str, setStr] = useState("");
	const [displayTicket, setDisplayTicket] = useState(Tickets);

	const navigate = useNavigate();

	const searchTicket = (s) => {
		const filteredTicket = Tickets.filter((ticket) =>
			ticket.subject.toLowerCase().includes(s.toLowerCase())
		);
		setDisplayTicket(filteredTicket);
	};

	const handleOnChange = (e) => {
		const { value } = e.target;
		setStr(value);
		searchTicket(value);
	};

	useEffect(() => {
		// setDisplayTicket(Tickets);
	}, [str, displayTicket]);

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
					<SearchForm handleOnChange={handleOnChange} str={str} />
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<TicketTable Tickets={displayTicket} />
				</Col>
			</Row>
		</Container>
	);
};

export default TicketList;
