import "./App.css";
import Default from "./Layout/Default/Default";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AddNewTicket from "./pages/newTicket/AddNewTicket";
import TicketList from "./pages/ticketList/TicketList";
import TicketDetail from "./pages/ticketDetail/TicketDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<LoginPage />} />
					<Route element={<Default />}>
						<Route element={<PrivateRoute />}>
							<Route path="/dashboard" element={<DashboardPage />} />
							<Route path="/add-ticket" element={<AddNewTicket />} />
							<Route path="/all-tickets" element={<TicketList />} />
							<Route path="/ticket/:tId" element={<TicketDetail />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
