import CLI from "../components/CLI"
import Cloud from "../components/Cloud"
import ShowCase from "../components/Showcase"
import Stats from "../components/Stats"

const Home = () => {
	return (
		<>
			<ShowCase />
			<Stats />
			<CLI />
			<Cloud />
		</>
	)
}

export default Home
