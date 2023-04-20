import axios from "axios";
import {
	fetchTicketLoading,
	fetchTicketSuccess,
	fetchTicketError,
	allTicket,
} from "../slice/ticketSlice";

export const fetchAllTickets = () => async (dispatch) => {
	dispatch(fetchTicketLoading());
	try {
		const result = await axios.get("http://localhost:5000/v1/ticket", {
			headers: {
				Authorization:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVsQGdtYWlsLmNvbSIsImlhdCI6MTY4MTk2ODU4NiwiZXhwIjoxNjgxOTY5Nzg2fQ.FJCfR5mQh4XicU3b2IUQSid9lkRZeVbxcaN9Arw7Jrs",
			},
		});

		dispatch(fetchTicketSuccess(result.data.data));
	} catch (error) {
		dispatch(fetchTicketError(error.message));
	}
};

export const filterTicket = (str) => (dispatch) => {
	dispatch(allTicket(str));
};
