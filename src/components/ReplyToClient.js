import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

import { replyTicket } from "../redux-toolkit/actions/ticketActions";
import { useSelector, useDispatch } from "react-redux";

const ReplyToClient = ({ id }) => {
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();
	const { replyMsg } = useSelector((state) => state.tickets);

	const { user } = useSelector((state) => state.user);

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMessage(value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const msgObj = {
			message,
			sender: user.name,
		};
		dispatch(replyTicket(id, msgObj));
		setMessage("");
	};

	return (
		<div>
			{replyMsg && <Alert variant="success">{replyMsg}</Alert>}

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
