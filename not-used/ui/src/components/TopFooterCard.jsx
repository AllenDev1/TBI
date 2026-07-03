import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../scss/topfooter.scss";
import pic from "../assets/pic.svg";
import { WhiteBtn } from "./WhiteBtn";
import { useNavigate } from "react-router-dom";

const TopFooterCard = () => {
	let navigate = useNavigate();
	const btnname = "Contact us";
	const routeChange = () => {
		let path = `/contact`;
		navigate(path);
	};
	return (
		<>
			<Container className="topfootercard-container">
				<Card className="top-footer-card">
					<Row className="top-footer-row">
						<Col className="text-heading">
							<div className="text-ideas-heading">
								<h1>We Help To Build Your Dream Project</h1>
								<p>Invest in your ideas today.</p>
							</div>

							{WhiteBtn(btnname, routeChange)}
						</Col>
						<Col className="some-img">
							<img src={pic} alt="" />
						</Col>
					</Row>
				</Card>
			</Container>
		</>
	);
};

export default TopFooterCard;
