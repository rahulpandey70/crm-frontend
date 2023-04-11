import "./App.css";
import Default from "./Layout/Default/Default";
// import LoginPage from "./pages/loginPage/LoginPage";
// import DashboardPage from "./pages/dashboard/DashboardPage";
import AddNewTicket from "./pages/newTicket/AddNewTicket";

function App() {
	return (
		<div className="App">
			<Default>
				{/* <LoginPage /> */}
				{/* <DashboardPage /> */}
				<AddNewTicket />
			</Default>
		</div>
	);
}

export default App;
