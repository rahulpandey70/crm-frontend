import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./slice/ticketSlice";

const store = configureStore({ reducer: { tickets: ticketsReducer } });

export default store;
