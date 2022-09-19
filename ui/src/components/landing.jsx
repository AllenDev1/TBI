import React from "react";
import Navbar from "../components/navbar";
import "../scss/landing.css";
import { Container, Button, Col, Row, Stack } from "react-bootstrap";
import Landimg from "../assets/img1.svg";
import "../scss/landing.scss";
import { Link } from "react-router-dom";
import img1 from "../assets/_company website 5/carbon_code.svg";
import img2 from "../assets/_company website 5/clarity_qr-code-line.svg";
import img3 from "../assets/_company website 5/fa-solid_file-code.svg";
import img4 from "../assets/_company website 5/Vector-1.svg";
import img5 from "../assets/_company website 5/Vector-2.svg";
import img6 from "../assets/_company website 5/Vector.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
	let navigate = useNavigate();

	return (
		<>
			<Navbar />
			<div className="first-section">
				<Container className="lading-cont">
					<Row className="landind-row">
						<Col className="landing-col">
							<h5>Modern Studio</h5>
							<h1>We Help To Build Your Dream Projects</h1>
							<p>
								Technology is best when it brings people
								together.
							</p>
							<div className="btns-sec-landing">
								<Button
									onClick={() => {
										navigate("/works");
									}}
								>
									How We Work
								</Button>
								<Link to="/contact">Contact Us</Link>
							</div>
						</Col>
						<Col className="landing-col1">
							<img src={Landimg} alt=".." />
						</Col>
					</Row>
					<Stack
						direction="horizontal"
						gap={3}
						className="some-animation"
					>
						<img src={img1} alt="..." />
						<img src={img2} alt="..." />
						<img src={img3} alt="..." />
						<img src={img4} alt="..." />
						<img src={img5} alt="..." />
						<img src={img6} alt="..." />
					</Stack>
				</Container>
			</div>
		</>
	);
};

export default Landing;
