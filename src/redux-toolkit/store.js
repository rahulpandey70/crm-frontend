import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./slice/ticketSlice";
import loginReducer from "./slice/loginSlice";
import userReducer from "./slice/userSlice";

const store = configureStore({
	reducer: { tickets: ticketsReducer, login: loginReducer, user: userReducer },
});

export default store;
