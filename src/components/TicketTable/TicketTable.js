import React from "react";
import { Table, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const TicketTable = () => {
	const { allTicketList, isLoading, error } = useSelector(
		(state) => state.tickets
	);

	if (isLoading) return <Spinner variant="primary" animation="border" />;
	if (error) return <Alert className="text-center">{error}</Alert>;

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Subjects</th>
					<th>Status</th>
					<th>Opened Date</th>
				</tr>
			</thead>
			<tbody>
				{allTicketList.length ? (
					allTicketList.map((ticket) => (
						<tr key={ticket._id}>
							<td>{ticket._id}</td>
							<td>
								<Link
									to={`/ticket/${ticket._id}`}
									style={{ textDecoration: "none" }}
								>
									{ticket.subject}
								</Link>
							</td>
							<td>{ticket.status}</td>
							<td>{ticket.openAt}</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan="4" className="text-center">
							No Tickets
						</td>
					</tr>
				)}
			</tbody>
		</Table>
	);
};

export default TicketTable;
