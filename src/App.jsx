import { BrowserRouter } from "react-router-dom"
import "./App.css"
import "./components/Utilities.css"
import Navbar from "./components/Navbar"
import Page from "./pages/Page"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Page />
		</BrowserRouter>
	)
}

export default App
