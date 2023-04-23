import node from "../assets/images/logos/node.png"
import python from "../assets/images/logos/python.png"
import csharp from "../assets/images/logos/csharp.png"
import ruby from "../assets/images/logos/ruby.png"
import php from "../assets/images/logos/php.png"
import scala from "../assets/images/logos/scala.png"
import clojure from "../assets/images/logos/clojure.png"

const Languages = () => {
	return (
		<>
			<section className="languages">
				<h2 className="md text-center my-2">Supported Languages</h2>
				<div className="container flex">
					<div className="card">
						<h4>C#</h4>
						<img src={csharp} alt="logo" />
					</div>
					<div className="card">
						<h4>Ruby</h4>
						<img src={ruby} alt="logo" />
					</div>
					<div className="card">
						<h4>Python</h4>
						<img src={python} alt="logo" />
					</div>
					<div className="card">
						<h4>PHP</h4>
						<img src={php} alt="logo" />
					</div>

					<div className="card">
						<h4>Scala</h4>
						<img src={scala} alt="logo" />
					</div>
					<div className="card">
						<h4>Clojure</h4>
						<img src={clojure} alt="logo" />
					</div>
					<div className="card">
						<h4>Node.js</h4>
						<img src={node} alt="logo" />
					</div>
				</div>
			</section>
		</>
	)
}

export default Languages
