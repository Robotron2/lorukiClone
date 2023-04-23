import { Link } from "react-router-dom"

const Footer = () => {
	const date = new Date().getFullYear()

	return (
		<>
			<footer className="footer bg-dark py-5">
				<div className="container grid grid-3">
					<div>
						<h1>Robotron</h1>
						<p>Copyright &copy; {date}</p>
					</div>
					<nav>
						<ul>
							<li>
								<Link>Home</Link>
							</li>
							<li>
								<Link>Features</Link>
							</li>
							<li>
								<Link>Docs</Link>
							</li>
						</ul>
					</nav>
					<div className="social">
						<Link href="#">
							<i className="fab fa-github fa-2x"></i>
						</Link>
						<Link href="#">
							<i className="fab fa-facebook fa-2x"></i>
						</Link>
						<Link href="#">
							<i className="fab fa-instagram fa-2x"></i>
						</Link>
						<Link href="#">
							<i className="fab fa-twitter fa-2x"></i>
						</Link>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
