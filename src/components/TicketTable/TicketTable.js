import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TicketTable = ({ Tickets }) => {
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
				{Tickets.length ? (
					Tickets.map((ticket) => (
						<tr key={ticket.id}>
							<td>{ticket.id}</td>
							<td>
								<Link
									to={`/ticket/${ticket.id}`}
									style={{ textDecoration: "none" }}
								>
									{ticket.subject}
								</Link>
							</td>
							<td>{ticket.status}</td>
							<td>{ticket.date}</td>
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

TicketTable.propTypes = {
	Tickets: PropTypes.array.isRequired,
};
