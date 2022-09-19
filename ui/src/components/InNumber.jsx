import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../scss/innumber.scss"
const InNumber = () => {
	return (
		<>
			<Container className="innumber-container">
				<Row className="inNumber-row">
					<Col className="innumber-col">
						<h1>100</h1>
						<h2>Projects Completed</h2>
					</Col>
                    <Col className="innumber-col">
						<h1>100</h1>
						<h2>Projects Completed</h2>
					</Col>
                    <Col className="innumber-col">
						<h1>100</h1>
						<h2>Projects Completed</h2>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default InNumber;
