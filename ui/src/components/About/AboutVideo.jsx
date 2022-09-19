import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bitmap from "../../assets/Bitmap.svg";
import bitmap1 from "../../assets/Bitmap-1.svg";
import bitmap2 from "../../assets/Bitmap-2.svg";
import bitmap3 from "../../assets/Bitmap-3.svg";

const AboutVideo = () => {
	return (
		<>
			<Container className="about-body">
				<Row className="about-image-row">
					<Col className="about-image-video">
						<video width={570} height={448} controls>
							<source
								src="https://www.youtube.com/watch?v=t2ypzz6gJm0&ab_channel=WebDevSimplified"
								type="video/mp4"
							/>
						</video>
					</Col>
					<Col className="about-image-group">
						<Row className="about-image-group-row">
							<Col className="about-image-group-col">
								<img src={bitmap} alt="..." />
							</Col>
							<Col className="about-image-group-col">
								<img src={bitmap1} alt="..." />
							</Col>
						</Row>
						<Row className="about-image-group-row">
							<Col className="about-image-group-col">
								<img src={bitmap2} alt="..." />
							</Col>
							<Col className="about-image-group-col">
								<img src={bitmap3} alt="..." />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AboutVideo;
