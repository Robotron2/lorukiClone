import { Link } from "react-router-dom"
import docs from "../assets/images/docs.png"

const Docs = () => {
	return (
		<>
			<section className="docs-head bg-primary py-3">
				<div className="container grid">
					<div>
						<h1 className="xl">Docs</h1>
						<p className="lead">Learn how to work with the Loruki platform</p>
					</div>
					<img src={docs} alt="docs   " />
				</div>
			</section>

			<section className="docs-main my-4">
				<div className="container grid">
					<div className="card bg-light p-3">
						<h3 className="my-2">Essentials</h3>
						<nav>
							<ul>
								<li>
									<Link className="text-primary">Introduction</Link>
								</li>
								<li>
									<Link>About Loruki</Link>
								</li>
								<li>
									<Link>Installation</Link>
								</li>
							</ul>
						</nav>

						<h3 className="my-2">Deployment</h3>
						<nav>
							<ul>
								<li>
									<Link to={"/"}>Setting up a container</Link>
								</li>
								<li>
									<Link to={"/"}>Using the CLI</Link>
								</li>
								<li>
									<Link to={"/"}>Managing resources</Link>
								</li>
								<li>
									<Link to={"/"}>Upgrade & downgrade</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="card">
						<h2>Introduction</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo facere perferendis laborum? Similique recusandae incidunt eos dolorum aliquam ipsam unde
							perspiciatis laudantium totam quam laborum velit, at maxime minus?
						</p>

						<div className="alert alert-success">
							<i className="fas fa-info"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, animi?
						</div>

						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima totam magni eius vitae velit id, atque veritatis! At, vero porro.</p>
						<Link to={"/"} className="btn btn-primary">
							Install CLI
						</Link>

						<h3>Requirements</h3>
						<ul>
							<li>Windows 10, Mac OSX, Linux</li>
							<li>Node.js v12 or higher</li>
						</ul>

						<h3>Install</h3>
						<p>Mac (Homebrew)</p>
						<pre>
							<code>$ brew install loruki-cli</code>
						</pre>
						<p>NPM</p>
						<pre>
							<code>$ npm install loruki-cli</code>
						</pre>
						<p>Yarn</p>
						<pre>
							<code>$ yarn install loruki-cli</code>
						</pre>
					</div>
				</div>
			</section>
		</>
	)
}

export default Docs
