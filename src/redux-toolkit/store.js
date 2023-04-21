import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./slice/ticketSlice";
import loginReducer from "./slice/loginSlice";

const store = configureStore({
	reducer: { tickets: ticketsReducer, login: loginReducer },
});

export default store;
