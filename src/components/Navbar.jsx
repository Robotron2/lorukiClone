import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="container flex">
					<h1 className="logo">Loruki.</h1>
					<nav>
						<ul>
							<li>
								<Link>Heloo</Link>
							</li>
							<li>
								<Link>Heloo</Link>
							</li>
							<li>
								<Link>Heloo</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Navbar
