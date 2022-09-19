import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../scss/ourteam.scss";

const OurTeam = () => {
	const [team, setTeam] = useState();

	const getTeam = () => {
		const options = {
			method: "GET",
			url: "/addteamlist",
		};

		axios
			.request(options)
			.then(function (response) {
				setTeam(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	useEffect(() => {
		getTeam();
	}, []);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 3, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<>
			<div className="our-team-bg-color">
				<Container className="our-team-container">
					<h4 className="ourteam-title">Our Team</h4>
					<h1 className="team-of">
						Team of Designers and Developers
					</h1>

					<Carousel
						className="team-carousel"
						swipeable={true}
						draggable={true}
						showDots={true}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						deviceType={responsive.deviceType}
						responsive={responsive}
						autoPlaySpeed={1}
						keyBoardControl={true}
						customTransition="all .5"
						transitionDuration={500}
						containerClass="carousel-container"
						removeArrowOnDeviceType={["tablet", "mobile"]}
						autoPlay={false}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						{team?.map((item, index) => {
							return (
								<Card>
									<Card.Img
										className="team-image"
										variant="top"
										src={Buffer.from(item.Image, "base64")}
										alt="..."
									/>
									<Card.Body className="team-card-body">
										<Card.Title className="team-member-name">
											{item.Name}
										</Card.Title>
										<Card.Text className="team-member-work">
											{item.Job}
										</Card.Text>
									</Card.Body>
								</Card>
							);
						})}
						<></>
					</Carousel>
				</Container>
			</div>
		</>
	);
};

export default OurTeam;
