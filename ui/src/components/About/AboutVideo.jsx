import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bitmap from "../../assets/Bitmap.svg";
import bitmap1 from "../../assets/Bitmap-1.svg";
import bitmap2 from "../../assets/Bitmap-2.svg";
import bitmap3 from "../../assets/Bitmap-3.svg";
import video from "../../assets/video.mp4";
import Spline from "@splinetool/react-spline";

const AboutVideo = () => {
	return (
		<>
			<Container className="about-body">
				<Row className="about-image-row">
					<Col className="about-image-video">
						{/* <video  controls>
							<source
								src={video}
								type="video/mp4"
							/>

						</video> */}

						<Spline
							className="spline"
							scene="https://prod.spline.design/k99HVzraHEeIFQii/scene.splinecode"
						/>
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
