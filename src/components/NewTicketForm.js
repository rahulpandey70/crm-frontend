import React from "react";
import PropTypes from "prop-types";
import "../pages/newTicket/AddNewTicket.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewTicketForm = ({ handleOnChange, handleOnSubmit, formData }) => {
	console.log(formData);
	return (
		<Card className="mt-3 ticket-form bg-light" style={{ border: "none" }}>
			<h3 className="text-info text-center">Add New Ticket</h3>
			<hr />
			<Form autoComplete="off" className="form-input" onSubmit={handleOnSubmit}>
				<Form.Group className="mt-2" as={Row}>
					<Form.Label column sm={3}>
						Subject
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							name="subject"
							value={formData.subject}
							onChange={handleOnChange}
							placeholder="Enter Subject"
							required
						/>
					</Col>
				</Form.Group>
				<Form.Group className="mt-2" as={Row}>
					<Form.Label column sm={3}>
						Issue Date
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							type="date"
							name="issueDate"
							value={formData.issueDate}
							onChange={handleOnChange}
							required
						/>
					</Col>
				</Form.Group>
				<Form.Group className="mt-2">
					<Form.Label>Text Area</Form.Label>
					<Form.Control
						as="textarea"
						name="detail"
						value={formData.detail}
						row="5"
						onChange={handleOnChange}
						required
					/>
				</Form.Group>
				<Button type="submit" variant="info" className="mt-2 ticket-btn">
					Open Ticket
				</Button>
			</Form>
		</Card>
	);
};

export default NewTicketForm;

NewTicketForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	formData: PropTypes.object.isRequired,
};
