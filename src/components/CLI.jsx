import cli from "../assets/images/cli.png"

const CLI = () => {
	return (
		<>
			<section className="cli">
				<div className="container grid">
					<img src={cli} alt="cli" />
					<div className="card">
						<h3>Easy to use, cross platform CLI</h3>
					</div>
					<div className="card">
						<h3>Deploy in seconds</h3>
					</div>
				</div>
			</section>
		</>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export default CLI
