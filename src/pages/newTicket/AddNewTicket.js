import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcumbs from "../../components/Breadcumbs";
import NewTicketForm from "../../components/NewTicketForm";

const AddNewTicket = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Breadcumbs page="New Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					<NewTicketForm />
				</Col>
			</Row>
		</Container>
	);
};

export default AddNewTicket;
