import axios from "axios";
import {
	fetchTicketLoading,
	fetchTicketSuccess,
	fetchTicketError,
	allTicket,
	fetchSingleTicketLoading,
	fetchSingleTicketSuccess,
	fetchSingleTicketError,
	replyTicketLoading,
	replyTicketSuccess,
	replyTicketError,
} from "../slice/ticketSlice";

export const fetchAllTickets = () => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		dispatch(fetchTicketLoading());
		try {
			const result = await axios.get("http://localhost:5000/v1/ticket", {
				headers: {
					Authorization: sessionStorage.getItem("accessToken"),
				},
			});

			resolve(result);
			result.data.data.length && dispatch(fetchTicketSuccess(result.data.data));
		} catch (error) {
			reject(error);
			dispatch(fetchTicketError(error.message));
		}
	});
};

export const filterTicket = (str) => (dispatch) => {
	dispatch(allTicket(str));
};

export const fetchSingleTicket = (id) => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		dispatch(fetchSingleTicketLoading());
		try {
			const result = await axios.get(`http://localhost:5000/v1/ticket/${id}`, {
				headers: {
					Authorization: sessionStorage.getItem("accessToken"),
				},
			});

			resolve(result);
			dispatch(fetchSingleTicketSuccess(result.data.data[0]));
		} catch (error) {
			reject(error);
			dispatch(fetchSingleTicketError(error.message));
		}
	});
};

export const replyTicket = (id, msgObj) => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		dispatch(replyTicketLoading());
		try {
			const result = await axios.put(
				`http://localhost:5000/v1/ticket/${id}`,
				msgObj,
				{
					headers: {
						Authorization: sessionStorage.getItem("accessToken"),
					},
				}
			);

			if (result.status === "error") {
				return dispatch(replyTicketError(result.message));
			}

			resolve(result);
			dispatch(fetchSingleTicket(id));

			dispatch(replyTicketSuccess(result.data.message));
		} catch (error) {
			reject(error);
			dispatch(replyTicketError(error.message));
		}
	});
};
