import CLI from "../components/CLI"
import Cloud from "../components/Cloud"
import Languages from "../components/Languages"
import ShowCase from "../components/Showcase"
import Stats from "../components/Stats"

const Home = () => {
	return (
		<>
			<ShowCase />
			<Stats />
			<CLI />
			<Cloud />
			<Languages />
		</>
	)
}

export default Home
