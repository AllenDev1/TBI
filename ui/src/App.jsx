import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Article from "./pages/Article";
import Contact from "./pages/Contact";

function App() {
	
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/home" element={<Home />} />

					<Route path="/about" element={<About />} />

					<Route path="/services" element={<Services />} />
					<Route path="/service" element={<Services />} />


					<Route path="/works" element={<Works />} />
					<Route path="/work" element={<Works />} />

					<Route path="article/:article_id/:article_title_slug" element={<Article />} />
					<Route path="/articles" element={<Article />} />

					<Route path="/contact" element={<Contact />} />

					<Route path="*" element={<p>Page not found</p>} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
