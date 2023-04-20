import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickets: [],
	isLoading: false,
	error: "",
	allTicketList: [],
};

const ticketListSlice = createSlice({
	name: "ticketList",
	initialState,
	reducers: {
		fetchTicketLoading: (state, action) => {
			state.isLoading = false;
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
	},
});

export const {
	fetchTicketLoading,
	fetchTicketSuccess,
	fetchTicketError,
	allTicket,
} = ticketListSlice.actions;
export default ticketListSlice.reducer;
