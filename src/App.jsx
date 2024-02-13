import { useSelector } from "react-redux";
import "./App.css";
import CounterApp from "./applications/counterApp/CounterApp";
import LoginPage from "./applications/loginPage/LoginPage";

function App() {
	const { isAuthenticated } = useSelector((state) => state.user.userInfo);

	return (
		<div className="App">
			{isAuthenticated ? <CounterApp /> : <LoginPage />}
		</div>
	);
}

export default App;
