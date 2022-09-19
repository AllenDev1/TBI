import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Abouthom from "../assets/abouthome.png";
import image1 from "../assets/Group 151.png";
import ser1 from "../assets/ser1.svg";
import wwdi1 from "../assets/_company website 4/Group 165.svg";
import wwdi5 from "../assets/_company website 4/Group 173.svg";
import wwdi2 from "../assets/_company website 4/Group 174.svg";
import wwdi3 from "../assets/_company website 4/Group 175.svg";
import wwdi4 from "../assets/_company website 4/Group 176.svg";
import da from "../components/datafiles/datafiles.json";
import "../scss/abouthome.css";
import "../scss/abouthome.scss";
import FreturesAbout from "./About/FreturesAbout";
import Faq from "./Faq";
import InNumber from "./InNumber";
import OurTeam from "./OurTeam";
import { WhiteBtn } from "./WhiteBtn";

const Abouthome = () => {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/about`;
		navigate(path);
	};

	const routeChangeServices = () => {
		let path = `/service`;
		navigate(path);
	};
	return (
		<>
			<Container className="about-home-landing">
				<div className="what-we-do-img">
					<img src={wwdi1} alt=".." />
					<img src={wwdi2} alt=".." />
					<img src={wwdi3} alt=".." />
					<img src={wwdi4} alt=".." />
					<img src={wwdi5} alt=".." />
				</div>
				<div className="homeabout">
					<div className="homeabout-l">
						<img src={Abouthom} alt="..." />
					</div>

					<div className="homeabout-r">
						<div className="abouttxt">
							<h1>About</h1>
						</div>
						<div className="boasttxt">
							<h1>
								The Finest IT
								<br />
								Solution
							</h1>
						</div>
						<div className="aboutquotetxt">
							<h1>We make designs that Inspire and Lead.</h1>
						</div>
						<div className="aboutparatxt">
							<p>
								There’s no shortage of remarkable ideas, what’s
								missing is the will to execute them. So, let us
								help you to fuel that will of yours.
							</p>
						</div>

						<div className="aboutbut">
							{WhiteBtn(da.aboutus, routeChange)}
						</div>
					</div>
				</div>
			</Container>

			<InNumber />

			<FreturesAbout />
			<Container className="ser-landing-container">
				<Row className="ser-landing-row">
					<Col className="ser-landing-col">
						<img src={ser1} alt="..." />
					</Col>
					<Col className="ser-landing-col1">
						<h5>Service</h5>
						<h1>Making Complex Digital Products</h1>
						<p>
							The sole reason we are in business is to make life
							less difficult for our clients.
						</p>
						{WhiteBtn(da.explore, routeChangeServices)}
					</Col>
				</Row>
			</Container>

			<div className="bg-homepage">
				<Container className="home-page-down-cont">
					<img src={image1} alt="" />
				</Container>
				<OurTeam />
				<Faq />
			</div>
		</>
	);
};

export default Abouthome;
