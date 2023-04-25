import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickets: [],
	isLoading: false,
	error: "",
	allTicketList: [],
	selectedTicket: {},
	replyMsg: "",
};

const ticketListSlice = createSlice({
	name: "ticketList",
	initialState,
	reducers: {
		fetchTicketLoading: (state, action) => {
			state.isLoading = true;
		},
		fetchTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.tickets = action.payload;
			state.allTicketList = action.payload;
		},
		fetchTicketError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		allTicket: (state, action) => {
			state.allTicketList = state.tickets.filter((ticket) => {
				if (!action.payload) return ticket;
				return ticket.subject
					.toLowerCase()
					.includes(action.payload.toLowerCase());
			});
		},
		fetchSingleTicketLoading: (state, action) => {
			state.isLoading = true;
		},
		fetchSingleTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.selectedTicket = action.payload;
			state.error = "";
		},
		fetchSingleTicketError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		replyTicketLoading: (state, action) => {
			state.isLoading = true;
		},
		replyTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.replyMsg = action.payload;
			state.error = "";
		},
		replyTicketError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		closeTicketLoading: (state, action) => {
			state.isLoading = true;
		},
		closeTicketSuccess: (state, action) => {
			state.isLoading = false;
			state.replyMsg = action.payload;
			state.error = "";
		},
		closeTicketError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
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
	closeTicketLoading,
	closeTicketSuccess,
	closeTicketError,
} = ticketListSlice.actions;
export default ticketListSlice.reducer;
