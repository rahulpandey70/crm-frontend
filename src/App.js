import "./App.css";
import Default from "./Layout/Default/Default";
// import LoginPage from "./pages/loginPage/LoginPage";
// import DashboardPage from "./pages/dashboard/DashboardPage";
import AddNewTicket from "./pages/newTicket/AddNewTicket";
import TicketList from "./pages/ticketList/TicketList";
import TicketDetail from "./pages/ticketDetail/TicketDetail";

function App() {
	return (
		<div className="App">
			{/* <LoginPage /> */}
			<Default>
				{/* <DashboardPage /> */}
				{/* <AddNewTicket /> */}
				{/* <TicketList /> */}
				<TicketDetail />
			</Default>
		</div>
	);
}

export default App;
