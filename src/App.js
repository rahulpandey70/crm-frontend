import "./App.css";
import Default from "./Layout/Default/Default";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
	return (
		<div className="App">
			<Default>
				{/* <LoginPage /> */}
				<DashboardPage />
			</Default>
		</div>
	);
}

export default App;
