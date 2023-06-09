import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { replyTicket } from "../redux-toolkit/actions/ticketActions";
import { useSelector, useDispatch } from "react-redux";

const ReplyToClient = ({ id }) => {
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();

	const {
		user: { name },
	} = useSelector((state) => state.user);

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMessage(value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const msgObj = {
			message,
			sender: name,
		};
		dispatch(replyTicket(id, msgObj));
		setMessage("");
	};

	return (
		<div>
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
		</div>
	);
};

export default ReplyToClient;

ReplyToClient.propTypes = {
	id: PropTypes.string.isRequired,
};
