import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const TicketTable = () => {
	const { allTicketList, isLoading, error } = useSelector(
		(state) => state.tickets
	);

	if (isLoading) return <h3 className="text-center">Loadig...</h3>;
	if (error) return <h3 className="text-center">{error}</h3>;

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
