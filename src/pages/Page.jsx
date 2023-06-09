import { Route, Routes } from "react-router-dom"
import Docs from "./Docs"
import Features from "./Features"
import Home from "./Home"

const Page = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/features" element={<Features />} />
				<Route path="/docs" element={<Docs />} />
			</Routes>
		</>
	)
}

export default Page
