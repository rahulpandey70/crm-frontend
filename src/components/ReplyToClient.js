import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

const ReplyToClient = ({ handleOnChange, handleOnSubmit, message }) => {
	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Label>Reply To Your Client</Form.Label>
			<Form.Control
				as="textarea"
				value={message}
				row="5"
				name="Message..."
				onChange={handleOnChange}
			/>
			<div className="text-end mt-3 mb-3">
				<Button variant="info" type="submit">
					Reply
				</Button>
			</div>
		</Form>
	);
};

export default ReplyToClient;

ReplyToClient.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
};
