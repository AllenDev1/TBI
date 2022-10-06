import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../scss/Testimonials.scss";


const Testimonials = () => {
	const [testimonials, setTestimonials] = useState();

	useEffect(() => {
		fetchTestimonials();
	}, []);

	const [activeCIndex, setActiveCIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		console.log(selectedIndex);
		setActiveCIndex(selectedIndex);
	};

	const fetchTestimonials = () => {
		const options = {
			method: "GET",
			url: "/testimonialslist",
		};

		axios
			.request(options)
			.then(function (response) {
				setTestimonials(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<>
			<div className="Testimonials-bg">
				<Container className="testi-container">
					<h5 className="Testimonials-test">Testimonials</h5>
					<h1 className="what-thay-say">
						What Our <br /> Clients are Saying
					</h1>
					<Carousel
						className="testi-carousel"
						interval={null}
						indicators={false}
						activeIndex={activeCIndex}
						onSelect={handleSelect}
					>
					
{/* 
						{testimonials?.map((item) => {
							return (
								<Carousel.Item
									className={
										"testi-carousel-items"
									}
								>
									<Carousel.Caption>
										<p>{item.Comment}</p>

										<h3>{item.Name}</h3>
										<p>{item.User_info}</p>
									</Carousel.Caption>
								</Carousel.Item>
								
							);
						})} */}
					</Carousel>
				</Container>
			</div>
		</>
	);
};

export default Testimonials;
