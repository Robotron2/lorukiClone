import { BrowserRouter } from "react-router-dom"
import "./App.css"
import "./components/Utilities.css"
import Navbar from "./components/Navbar"
import Page from "./pages/Page"
import Footer from "./components/Footer"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Page />
			<Footer />
		</BrowserRouter>
	)
}

export default App
