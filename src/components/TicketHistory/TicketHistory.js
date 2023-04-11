import React from "react";
import PropTypes from "prop-types";
import "./TicketHistory.css";

const TicketHistory = ({ msg }) => {
	if (!msg) return null;
	return msg.map((singleMsg, idx) => (
		<div key={idx} className="ticket-history mt-3">
			<div className="send font-weight-bold text-secondary">
				<div className="sender">{singleMsg.messageBy}</div>
				<div className="date">{singleMsg.date}</div>
			</div>
			<div className="msg">{singleMsg.message}</div>
		</div>
	));
};

export default TicketHistory;

TicketHistory.propTypes = {
	msg: PropTypes.array.isRequired,
};
