import axios from "axios";
import {
	fetchTicketLoading,
	fetchTicketSuccess,
	fetchTicketError,
	allTicket,
	fetchSingleTicketLoading,
	fetchSingleTicketSuccess,
	fetchSingleTicketError,
} from "../slice/ticketSlice";

export const fetchAllTickets = () => async (dispatch) => {
	dispatch(fetchTicketLoading());
	try {
		const result = await axios.get("http://localhost:5000/v1/ticket", {
			headers: {
				Authorization: sessionStorage.getItem("accessToken"),
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

export const fetchSingleTicket = (id) => async (dispatch) => {
	dispatch(fetchSingleTicketLoading());
	try {
		const result = await axios.get(`http://localhost:5000/v1/ticket/${id}`, {
			headers: {
				Authorization: sessionStorage.getItem("accessToken"),
			},
		});

		dispatch(fetchSingleTicketSuccess(result.data.data[0]));
	} catch (error) {
		dispatch(fetchSingleTicketError(error.message));
	}
};
