import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import axios from "axios";
import sendicon from "../assets/send-icon.svg";
import "../scss/email.scss";

const Email = () => {
	const [email, setEmail] = useState();

	const postEmail = (e) => {
		e.preventDefault();
		const options = {
			method: "POST",
			url: "/api/newsletter",
			headers: { "Content-Type": "application/json" },
			data: { email: email },
		};

		axios
			.request(options)
			.then(function (response) {
				alert("Thank you for subscribing!");
				window.location.reload(false);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	return (
		<>
			<div className="bg-email">
				<Container className="email-container">
					<Row className="email-row">
						<Col className="newsletter-col">
							<p>Newsletter</p>
						</Col>
						<Col className="sub-col">
							<Form onSubmit={postEmail} className="email-fomr">
								<input
									type="email"
									placeholder="Your email address"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									required
								/>
								<Button type="submit">
									Subscribe <img src={sendicon} alt="..." />
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Email;
