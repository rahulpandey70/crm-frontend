import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcumbs from "../../components/Breadcumbs";
import NewTicketForm from "../../components/NewTicketForm";

const initialData = {
	subject: "",
	issueDate: "",
	detail: "",
};

const AddNewTicket = () => {
	const [formData, setFormData] = useState(initialData);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log("form submited", formData);
	};

	return (
		<Container>
			<Row>
				<Col>
					<Breadcumbs page="New Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					<NewTicketForm
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
						formData={formData}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default AddNewTicket;
